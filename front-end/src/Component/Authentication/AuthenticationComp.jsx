import React, {useState} from 'react'
import Login from './Login';
import SignUp from './SignUp';

function AuthenticationComp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <>
    { isAuthenticated ? <Login /> : <SignUp />  }
    </>
  )
}

export default AuthenticationComp;