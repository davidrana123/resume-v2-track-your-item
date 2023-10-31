import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import {loginHandler} from '../../Service/auth';
import { useHistory } from 'react-router-dom';

export default function Login() {
  let router = useHistory();
  const [login, setLogin] = useState({ email: '', password: '' });

  const fieldValue = (e) => setLogin({ ...login, [e.target.name]: e.target.value });

  const submit = async() => {
    try{
      const res = await loginHandler(login)
      localStorage.setItem('token', res.data.token)
      router.push('/authHome')
    }catch(error){
      console.log(error)
    }
  };

  return (
    <Box
      component="form"
      sx={{
        backgroundColor:'white',
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Button variant="outlined" onClick={() => router.push('/signup')} >Sign-up</Button>
      <Typography>Login-Page</Typography>
       <TextField
      id="outlined-basic"
      name="email"
      value={login.email}
      onChange={(e) => fieldValue(e)}
      label="Email"
      variant="outlined"
    />
      <TextField
      id="outlined-basic"
      name="password"
      value={login.password}
      onChange={(e) => fieldValue(e)}
      label="Password"
      variant="outlined"
    />
      <Button variant="outlined" onClick={submit}>
        Submit
      </Button>
    </Box>
  );
}
