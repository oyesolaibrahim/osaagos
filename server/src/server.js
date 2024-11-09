const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const multer = require('multer');
const path = require('path');

// Set up storage location and file naming
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Folder to store uploaded images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

const { addAlumni, alumniLogin, alumni, searchAlumni } = require("./controllers/alumni.controllers");
const Message = require('./models/chat.model');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true,
    },
});

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect("mongodb://0.0.0.0:27017/Osaagos")
    .then(() => {
        console.log("Database connected successfully!");
    })
    .catch((err) => {
        console.log("Error connecting to DB:", err.message);
    });

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('joinRoom', async ({ userId, otherUserId }) => {
        const roomId = [userId, otherUserId].sort().join('_');
        socket.join(roomId);
        console.log(`User ${userId} joined room ${roomId}`);

        try {
            // Load previous messages in this room
            const messages = await Message.find({ roomId }).sort({ timestamp: 1 });
            socket.emit('previousMessages', messages);
        } catch (err) {
            console.error("Error loading messages:", err);
        }
    });

   socket.on('sendMessage', async (msg) => {
    const { sender, receiver, content } = msg;
    if (!sender || !receiver || !content) {
        console.error("Error: Missing required fields for message");
        return;
    }

    try {
        const roomId = [sender, receiver].sort().join('_');
        msg.roomId = roomId;
        const message = new Message(msg);
        await message.save();
        io.to(roomId).emit('receiveMessage', msg); // Emit message only to room
    } catch (error) {
        console.error("Error saving message:", error);
    }
});


    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

app.post('/api/register', upload.single('profilePicture'), addAlumni);
// app.post("/api/register", addAlumni);
app.post("/api/login", alumniLogin);

app.get("/api/register", alumni);
app.get("/api/search", searchAlumni);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));
