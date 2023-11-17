import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State/index';

const Counter = () => {
  const state = useSelector((state) => state.twentyCount);
  const dispatch = useDispatch();
  const { incressTwenty, decressTwenty } = bindActionCreators(actionCreators, dispatch);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant='h5'>Redux Component</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => incressTwenty(10)}
        style={{ marginRight: '10px' }}
      >
        +
      </Button>
      <Button variant="contained" color="secondary" onClick={() => decressTwenty(10)}>
        -
      </Button>
      <Typography variant="h3" style={{ marginTop: '20px' }}>
        Result: {state}
      </Typography>
    </div>
  );
};

export default Counter;
