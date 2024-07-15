import React, {useState, useEffect} from 'react'
  import Login from './Login';
import SignUp from './SignUp';
import AuthHome from './AuthHome';
import {Authenticated} from '../../Service/auth'
import { useNavigate } from 'react-router-dom';

function AuthenticationComp() {
  let router = useNavigate();

  useEffect(() => {
    console.log('i am running')
    const checkAuthentication = async () => {
      try {
        const res = await Authenticated();
        console.log('res',res)
        // if(localStorage.getItem('token') === res)
        router('/authHome')
        console.log('res.data.expiresIn', res.data.expiresIn)
        if(res.status === 200){
          router('/authHome')
        }
      } catch (error) {
        router('/login')
        console.log('----',error);
      }
    };
  
    checkAuthentication();
  }, []);

  return (
    <>
    {/* <AuthHome /> */}
    {/* { isAuthenticated ? <AuthHome /> : <Login />  } */}
    </>
  )
}

export default AuthenticationComp;