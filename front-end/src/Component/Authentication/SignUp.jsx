import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function SignUp() {
  const [login, setLogin] = useState({ email: '', password: '',confirm:'' });

  const fieldValue = (e) => setLogin({ ...login, [e.target.name]: e.target.value });

  const submit = () => {
    console.log(login);
  };

  const emailField = useMemo(() => (
    <TextField
      id="outlined-basic"
      name="email"
      value={login.email}
      onChange={(e) => fieldValue(e)}
      label="Email"
      variant="outlined"
    />
  ), [login.email]);

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

  const confirmPasword = useMemo(() => (
    <TextField 
    id="outlined-basic"
      name="confirm"
      value={login.confirm}
      onChange={(e) => fieldValue(e)}
      label="Re-Enter-Password"
      variant="outlined"
    />
  ), [login.confirm])



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
      {emailField}
      {passwordField}
      {confirmPasword}
      <Button variant="outlined" onClick={submit}>
        Submit
      </Button>
    </Box>
  );
}
