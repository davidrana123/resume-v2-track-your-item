import React from 'react';
import { Container, Grid, Card, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    if (path === 'CRUD') {
      navigate('/crud');
    } else if (path === 'Chat App') {
      navigate('/chatapp');
    } else if (path === 'Auth') {
      navigate('/authentication');
    } else {
      navigate('/track-your-item')
    }
  };

  const arr = [
    { name: 'Chat App', id: '1' },
    { name: 'Auth', id: '2' },
    { name: 'CRUD', id: '3' },
    { name: 'Track Your Itam', id: '4' },
  ];

  return (
    <Container className="container">
      <Grid container className="gridContainer" spacing={2}>
        {arr.map((data, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card className="mainCard">
              <Grid container justifyContent="center">
                <Grid item xs="auto">
                  <Typography variant="h4" className="brandHeader" data-test="enroll-patient-copay">
                    {data.name}
                  </Typography>
                </Grid>
              </Grid>
              <br />
              <br />
              <Grid container justifyContent="center">
                <Grid item xs="auto">
                  <Button
                    id="enroll_btn"
                    variant="contained"
                    color="primary"
                    className="bigButton"
                    onClick={() => navigateToPage(data.name)}
                  >
                    GO
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
