import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';
import { url } from '../../Service/chatAppService';
import { Button, TextField } from '@material-ui/core';
import './Chatapp.css'; // Ensure this file is used for styling

function Chatapp() {
  const socket = io.connect(url);
  const userName = nanoid(4);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  const sendMessage = () => {
    if (message) {
      socket.emit('message', { message, userName });
      setMessage('');
    }
  };

  const textFieldHandling = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

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
