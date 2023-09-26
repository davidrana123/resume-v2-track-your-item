import { Button } from '@material-ui/core'
import React from 'react'
import './HomeStyle.css';
import { useHistory } from "react-router-dom";

function Home() {

    let router = useHistory();
  return (
    
    <div className='center-container'>
    <Button onClick={() => router.push("/home")} size="large" color="success" className='BtnStyle' variant="contained">Start</Button>
    </div>

  )
}

export default Home