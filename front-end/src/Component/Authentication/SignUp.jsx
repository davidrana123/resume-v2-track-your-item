import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { registerHandler } from '../../Service/auth';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
  let router = useHistory();
  const [login, setLogin] = useState(
    { 
    username:'', 
    email: '', 
    password: '', 
  }
    );

  const fieldValue = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const submit = async() => {
    try{
      let res = await registerHandler(login)
      console.log('res',res)
    }catch(error){
      console.log('error')
    }
  };


  return (
    <Box
      component="form"
      sx={{
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>Sing-up Page</Typography>
       <TextField 
    id="outlined-basic"
      name="username"
      value={login.username}
      onChange={(e) => fieldValue(e)}
      label="Username"
      variant="outlined"
    />
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
      <Button variant="outlined" onClick={() => router.push('/authentication')}>
        Login
      </Button>
    </Box>
  );
}
