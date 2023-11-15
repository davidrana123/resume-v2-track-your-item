import { Button, Typography } from '@material-ui/core';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { actionCreators } from '../../State/index';

function Counter() {
  const state = useSelector(state => state.twentyCount)
  const dispatch = useDispatch();
  // const actions = bindActionCreators(actionCreators, dispatch);
  // destructer
  const { incressCounter, decressCounter,incressTwenty,decressTwenty  } = bindActionCreators(actionCreators, dispatch)


  return (
    <>
    <Button onClick={() => incressTwenty(10)}>Add</Button>
    <Button onClick={() => decressTwenty(10)}>-</Button>
    <Typography variant='h3'>Result:- {state}</Typography>
    </>
  )
}

export default Counter;