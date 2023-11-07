import React from 'react';
import CommonButton from '../CommanBtn/CommonButton';
import { useHistory } from 'react-router-dom';
import '../../Component/Home/HomeStyle.css'
import Grid from '@mui/material/Grid';

function Home() {
  let router = useHistory();

  return (
    <div className="center-container">
       <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center" spacing={2}>
       <Grid item xs={3}><CommonButton label="App" onClick={() => router.push('/home')} /></Grid>
       <Grid item xs={3}><CommonButton label="Interview" onClick={() => router.push('/interviewSelection')} /></Grid>
       </Grid>
    </div>
  );
}

export default Home;
