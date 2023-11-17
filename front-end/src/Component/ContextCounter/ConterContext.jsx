import React, { useContext } from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import CounterContext from '../../ContextStore/CounterContext';

function ConterContext() {
  const { setCount, count } = useContext(CounterContext);

  const buttonStyle = {
    marginRight: '10px',
  };

  const resultStyle = {
    marginTop: '20px',
    fontSize: '18px',
  };

  return (
    <Box>
      <Typography variant='h5' gutterBottom>
        Context Store
      </Typography>
      <Button
        variant='contained'
        color='primary'
        style={buttonStyle}
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
      <Button
        variant='contained'
        color='secondary'
        style={buttonStyle}
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
      <Typography variant='h6' style={resultStyle}>
        Result: {count !== null ? count : 'Null'}
      </Typography>
    </Box>
  );
}

export default ConterContext;
