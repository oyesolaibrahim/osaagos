import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Header from './Header';
import Footer from './Footer';

const socket = io('http://localhost:5000');

const ChatApp = ({ userId, otherUserId, userProfile, otherUserProfile }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Debugging log to check userId and otherUserId on component mount
        console.log("ChatApp initialized with userId:", userId, "otherUserId:", otherUserId);

        if (!userId || !otherUserId) {
            console.warn("userId or otherUserId is missing!");
            return; // Prevent execution if IDs are missing
        }

        const roomId = [userId, otherUserId].sort().join('_');
        socket.emit('joinRoom', { userId, otherUserId, roomId });

        socket.on('previousMessages', (msgs) => {
            setMessages(msgs);
        });

        socket.on('receiveMessage', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('previousMessages');
            socket.off('receiveMessage');
        };
    }, [userId, otherUserId]);

    const handleSendMessage = () => {
        if (!userId || !otherUserId || !message.trim()) {
            console.warn("userId, otherUserId, or message is missing");
            return; // Stop if required fields are missing
        }

        const msg = {
            sender: userId,
            receiver: otherUserId,
            content: message.trim(),
            timestamp: new Date(),
        };

        console.log("Sending message:", msg); // Log full message details
        socket.emit('sendMessage', msg);
        setMessage('');
    };

    return (
        <>
            <Header />
            <div className="flex flex-col h-screen bg-gray-200">
                <div className="flex-1 p-4 overflow-y-scroll">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex mb-4 ${msg.sender === userId ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender !== userId && (
                                <img src={otherUserProfile} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                            )}
                            <div className={`p-3 rounded-lg shadow ${msg.sender === userId ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
                                <div>{msg.content}</div>
                                <div className="text-xs text-gray-400 text-right">
                                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                            {msg.sender === userId && (
                                <img src={userProfile} alt="Profile" className="w-8 h-8 rounded-full ml-2" />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex p-4 bg-white border-t border-gray-200">
                    <input
                        type="text"
                        className="flex-1 p-2 border border-gray-300 rounded-md"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                        onClick={handleSendMessage}
                        disabled={!message.trim()} // Disable button if input is empty
                    >
                        Send
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ChatApp;
