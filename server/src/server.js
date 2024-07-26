const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000', // Adjust this to your frontend's URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
    credentials: true
  }
});

// Use CORS middleware
const corsConfig = {
  origin: 'http://localhost:3000', // Adjust this to your frontend's URL
  credentials: true,
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Authorization'
  ]
};

app.use(cors(corsConfig));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/chatApp')
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to DB:', err.message);
  });

const messageSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  content: String,
  timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

io.on('connection', (socket) => {
  console.log('New client connected');

  // Join the user to a room with the other user
  socket.on('joinRoom', ({ userId, otherUserId }) => {
    const room = [userId, otherUserId].sort().join('_');
    socket.join(room);
    console.log(`User ${userId} joined room ${room}`);
  });

  socket.on('loadMessages', async ({ sender, receiver }) => {
    try {
      const messages = await Message.find({
        $or: [
          { sender, receiver },
          { sender: receiver, receiver: sender }
        ]
      }).sort({ timestamp: 1 }).exec();
      socket.emit('previousMessages', messages);
    } catch (err) {
      console.error('Error loading messages:', err);
    }
  });

  socket.on('sendMessage', async (msg) => {
    try {
      const message = new Message(msg);
      await message.save();
      const room = [msg.sender, msg.receiver].sort().join('_');
      io.to(room).emit('receiveMessage', msg); // Emit message to the specific room
    } catch (err) {
      console.error('Error saving message:', err);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));
