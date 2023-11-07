import { Button, Box, Typography, TextField } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom';
import Counter from '../ReduxComponent/Counter';

function AuthHome() {
    let router = useHistory();
    const clearFun = () => {
        localStorage.removeItem('token')
        router.push('/login')
    }
  return (
    <>
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
    <TextField>Point of FullStack</TextField>
    <Typography variant='h3'>Auth Home</Typography>
    <Counter />
    <Button variant='outlined' onClick={() => clearFun()}>Log-out</Button>
    </Box>
    </>
  )
}

export default AuthHome