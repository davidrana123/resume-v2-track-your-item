import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

const divStyle = {margin: 'auto', position:'absolute', top:'20%', left:'25%'}
const btnstyle = {width:'10rem' , height:'4rem', borderRadius: '10px',}

function ButtonCom() {
    const history = useNavigate();
    const navigateFunction = (location) => {
        if(location === 'create-record'){
            history.push('/add')
        }
        if(location === 'created-list'){
            history.push('/addRecords')
        }
        if(location === 'add-item'){
            history.push('/result')
        }
        if(location === 'track-item'){
            history.push('/list')
        }
        if(location === 'old-version'){
            history.push('/oldversion1')
        }
    }
  return (
        
            <Stack  direction="row" spacing={2}  style={divStyle}>
            <Button variant="contained" color='secondary' style={btnstyle} onClick={() => navigateFunction('create-record')} >Create Record</Button>
            <Button variant="contained" color='secondary' style={btnstyle} onClick={() => navigateFunction('created-list')}>Created List</Button>
        <Button variant="contained" color='secondary' style={btnstyle} onClick={() => navigateFunction('add-item')}>Add Item</Button>
        <Button variant="contained" color='secondary' style={btnstyle} onClick={() => navigateFunction('track-item')}>Track Item</Button>
        <Button variant="contained" color='secondary' style={btnstyle} onClick={() => navigateFunction('old-version')}>Old Version</Button>
            </Stack>
        
  )
}

export default ButtonCom