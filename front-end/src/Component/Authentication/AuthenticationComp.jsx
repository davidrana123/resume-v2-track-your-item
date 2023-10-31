import React, {useState, useEffect} from 'react'
import Login from './Login';
import SignUp from './SignUp';
import AuthHome from './AuthHome';
import {Authenticated} from '../../Service/auth'

function AuthenticationComp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const res = await Authenticated();
        setIsAuthenticated(res.status === 200);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
      }
    };
  
    checkAuthentication();
  }, []);

  return (
    <>
    {/* <AuthHome /> */}
    { isAuthenticated ? <AuthHome /> : <Login />  }
    </>
  )
}

export default AuthenticationComp;