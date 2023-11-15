import React from 'react';
import CommonButton from '../CommanBtn/CommonButton';
import { useHistory } from 'react-router-dom';
import './InterviewHome.css';
import Grid from '@mui/material/Grid';
import Counter from '../CounterComponent/Counter';

function InterviewHome() {
  let router = useHistory();
  return (
    <div >
       <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center">
       <Grid style={{ marginLeft:'1px' }} item xs={3}><CommonButton label="Dsa Table" onClick={() => router.push('/dsaTable')} /></Grid>
       <Grid item xs={3}><CommonButton label="Auto scroll" onClick={() => router.push('/reactInterview')} /></Grid>
       <Grid item xs={3}><CommonButton label="Class Component" onClick={() => router.push('/classComponent')} /></Grid>
       <Grid item xs={3}> <CommonButton label="Authentication" onClick={() => router.push('/authentication')} /></Grid>
       <Grid item xs={3}> <CommonButton label="Chat App" onClick={() => router.push('/chatapp')} /></Grid>
       <Grid item xs={3}> <Counter /></Grid>
       </Grid>
    </div>
  );
}

export default InterviewHome;
