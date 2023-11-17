import { Button, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Counter from '../../Component/CounterComponent/Counter';
import { makeStyles } from '@material-ui/core/styles'; // Correct import path
import ConterContext from '../../Component/ContextCounter/ConterContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20vw',
    height: '50vh',
    margin: 'auto', // Center the Paper horizontally
    marginTop: '25vh', // Center the Paper vertically
    padding: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

function Index() {
  const classes = useStyles();
  const [storeFlag, setStoreFlag] = useState(false);

  return (
    <Paper className={classes.paper} elevation={3}>
      {storeFlag === true ? (
        <Counter />
      ) : (
        <ConterContext />
      )}
      <div className={classes.buttonContainer}>
        <Button onClick={() => setStoreFlag(true)} variant="contained" color="primary">
          Redux Store
        </Button>
        <Button onClick={() => setStoreFlag(false)} variant="contained" color="secondary">
          Context Store
        </Button>
      </div>
    </Paper>
  );
}

export default Index;
