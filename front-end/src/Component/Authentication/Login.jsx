import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { loginHandler } from '../../Service/auth';
import { useNavigate } from 'react-router-dom';
import './auth.css';

export default function Login() {
  let router = useNavigate();
  const [login, setLogin] = useState({ email: '', password: '' });

  const fieldValue = (e) => setLogin({ ...login, [e.target.name]: e.target.value });

  const submit = async () => {
    try {
      const res = await loginHandler(login);
      localStorage.setItem('token', res.data.token);
      router('/authHome');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      className='login'
      noValidate
      autoComplete="off"
    >
      <Typography variant='h4' className='login-header'>Login-Page</Typography>
      <TextField
        id="outlined-basic"
        name="email"
        value={login.email}
        onChange={fieldValue}
        label="Email"
        variant="outlined"
        className='login-textfield'
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
        className='login-textfield'
      />
      <br />
      <br />
      <Box className='button-container'>
        <Button variant="outlined" onClick={() => router('/signup')} className='login-button'>Sign-up</Button>
        <Button variant="outlined" onClick={submit} className='login-button'>Submit</Button>
      </Box>
    </Box>
  );
}
