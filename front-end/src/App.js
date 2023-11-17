import React from 'react'
import Router from './Router/index';
import CounterProvider from './ContextStore/CounterProvider';

function App() {

  // --openssl-legacy-provider        this is script
  return (
    <>
    <CounterProvider>
    <div>
    <Router />
    </div>
    </CounterProvider>
      </>
  );
}

export default App;
