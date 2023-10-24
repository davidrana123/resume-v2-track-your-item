// src/components/Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../Redux/reducers/counterReducer';

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

export default connect(mapStateToProps, { increment, decrement })(Counter);
