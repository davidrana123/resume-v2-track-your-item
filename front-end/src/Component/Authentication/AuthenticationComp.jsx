import React, {useState, useEffect} from 'react'
import Login from './Login';
import SignUp from './SignUp';
import AuthHome from './AuthHome';
import {Authenticated} from '../../Service/auth'

function AuthenticationComp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(async() => {
    try{
      const res = await Authenticated()
      if(res.status === 200){
        setIsAuthenticated(true)
      }else{
        setIsAuthenticated(false)
      }
    }catch(error){
      console.log(error)
    }
  },[])

  return (
    <>
    <AuthHome />
    {/* { isAuthenticated ? <AuthHome /> : <Login />  } */}
    </>
  )
}

export default AuthenticationComp;