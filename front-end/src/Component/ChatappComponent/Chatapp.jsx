import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { url } from '../../Service/chatAppService';
import { Button, TextField } from '@material-ui/core';
import './Chatapp.css'; // Ensure this file is used for styling

function Chatapp() {
  const socket = io.connect(url);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Set up socket listener
    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up the listener on unmount
    return () => {
      socket.off('message');
    };
  }, [socket]); // Empty dependency array ensures this runs once

  const handleLogin = () => {
    if (userName.trim()) {
      setIsLoggedIn(true);
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', { message, userName });
      setMessage('');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h1>Enter your name to start chatting</h1>
        <TextField
          className='chat-textfield'
          variant="outlined"
          color="secondary"
          name="userName"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
        />
        <Button variant="contained" onClick={handleLogin}>Login</Button>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <h1 className="chat-header">Chat Application</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            className={`message ${msg.userName === userName ? 'my-message' : 'other-message'}`}
            key={index}
          >
            <h3>Name: {msg.userName}</h3>
            <p style={{ color: index % 2 === 0 ? 'red' : 'blue' }}>Message: {msg.message}</p>
          </div>
        ))}
      </div>

      <div className="text-input-container">
        <TextField
          className='chat-textfield'
          variant="outlined"
          color="secondary"
          name="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <Button variant="contained" onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}

export default Chatapp;
