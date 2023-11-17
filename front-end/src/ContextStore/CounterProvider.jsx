import React, {useState} from 'react';
import CounterContext from './CounterContext';

const CounterProvider = ({children}) => {
    const [count, setCount] = useState(null)
    return(
        <CounterContext.Provider value={{ count, setCount }}>
            { children }
        </CounterContext.Provider>
    )
}
 
export default CounterProvider;