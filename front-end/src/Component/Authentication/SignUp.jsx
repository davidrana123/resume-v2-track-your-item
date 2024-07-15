import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { registerHandler } from '../../Service/auth';
import { useNavigate } from 'react-router-dom';
import './auth.css'; // Ensure this file is used for styling

export default function SignUp() {
  let router = useNavigate();
  const [login, setLogin] = useState({
    username: '',
    email: '',
    password: '',
  });

  const fieldValue = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      let res = await registerHandler(login);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Box
      component="form"
      className='signup'
      noValidate
      autoComplete="off"
    >
      <Typography variant='h4' className='signup-header'>Sign-up Page</Typography>
      <br />
      <br />
      <TextField
        id="outlined-basic"
        name="username"
        value={login.username}
        onChange={fieldValue}
        label="Username"
        variant="outlined"
        className='signup-textfield'
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        name="email"
        value={login.email}
        onChange={fieldValue}
        label="Email"
        variant="outlined"
        className='signup-textfield'
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        name="password"
        value={login.password}
        onChange={fieldValue}
        label="Password"
        variant="outlined"
        className='signup-textfield'
      />
      <br />
      <br />
      <Box className='button-container'>
        <Button variant="outlined" onClick={submit} className='signup-button'>
          Submit
        </Button>
        <Button variant="outlined" onClick={() => router('/authentication')} className='signup-button'>
          Login
        </Button>
      </Box>
    </Box>
  );
}
