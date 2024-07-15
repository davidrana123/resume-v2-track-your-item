import { Button, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authenticated } from '../../Service/auth';
import Login from './Login';
import './auth.css'; // Ensure this file is used for styling

function AuthHome() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const navigate = useNavigate();

  const clearFun = () => {
    localStorage.removeItem('token');
    navigate('/authentication');
    window.location.reload(); // Refresh the browser
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const res = await Authenticated();
        if (res.status === 200) {
          setIsAuthenticated(true);
          setTimeLeft(res.data.expiresIn); // Set the token expiration time in seconds
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    let timer;
    if (timeLeft !== null) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsAuthenticated(false); // Token expired, log out user
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTimeLeft = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <>
      {isAuthenticated?
      
      <Box component="form" className="auth-home-form" noValidate autoComplete="off">
      <Typography variant="h6" className="white-text">Point of FullStack</Typography>
      <Typography variant="h3" className="white-text">Auth Home</Typography>
      <Button variant="outlined" onClick={clearFun} className="white-button">Log-out</Button>
      {timeLeft > 0 && (
        <Typography variant="body1" className="countdown-text">
          Token expires in: {formatTimeLeft(timeLeft)}
        </Typography>
      )}
    </Box> :  <Box component="form" className="auth-home-form" noValidate autoComplete="off"><Button variant="outlined" onClick={clearFun} className="white-button">Logout</Button></Box>
    }
        
     
    </>
  );
}

export default AuthHome;
