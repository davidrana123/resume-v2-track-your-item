import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Login() {
  const [login, setLogin] = useState({ name: '', password: '' });

  const fieldValue = (e) => setLogin({ ...login, [e.target.name]: e.target.value });

  const submit = () => {
    console.log(login);
  };

  const nameField = useMemo(() => (
    <TextField
      id="outlined-basic"
      name="name"
      value={login.name}
      onChange={(e) => fieldValue(e)}
      label="Name"
      variant="outlined"
    />
  ), [login.name]);

  const passwordField = useMemo(() => (
    <TextField
      id="outlined-basic"
      name="password"
      value={login.password}
      onChange={(e) => fieldValue(e)}
      label="Password"
      variant="outlined"
    />
  ), [login.password]);

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
      {nameField}
      {passwordField}
      <Button variant="outlined" onClick={submit}>
        Submit
      </Button>
    </Box>
  );
}
