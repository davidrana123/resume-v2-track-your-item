// src/App.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';
import { url } from '../../Service/chatAppService';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';




function Chatapp() {
  const socket = io.connect(url);
const userName = nanoid(4)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  const sendMessage = () => {
    if (message) {
      socket.emit('message', {message, userName});
      setMessage('');
    }
  };

  const textFieldHandling = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  }

  return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
  <h1 style={{ color: 'white' }}>Chat Application</h1>
  <div className="messages" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {messages.map((msg, index) => (
      <div
        style={{
          border: '1px solid #ccc', // Add border for the card-like appearance
          borderRadius: '5px', // Add rounded corners
          padding: '10px', // Add padding for spacing
          backgroundColor: 'white',
          width: '60%', // Adjust the width as needed
          textAlign: 'center',
          margin: '10px auto', // Center the card horizontally with margin
        }}
        key={index}
      >
         <h3>Name: {msg.userName}</h3>
        <p style={{ color: index % 2 === 0 ? 'red' : 'blue' }}>Message:- {msg.message}</p>
      </div>
    ))}
  </div>

  <div style={{ backgroundColor:'white' }}>
     <TextField
       variant="outlined"
       color='secondary'
      name='message'
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Type a message..."
    />

    <br />
    <br />
    <Button variant="contained" onClick={sendMessage}>Send</Button>
  </div>
</div>

  
  );
}

export default Chatapp;
