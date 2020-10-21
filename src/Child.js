import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let countervalue = useContext(counterContext);
    return (

        <div>
            <h2>This is the first child</h2>
            <h3>This is the value: {countervalue[0]}</h3>
            <button onClick={()=> {countervalue[1](++countervalue[0])}}>Increment</button>
        </div>
    );
}

export default Child; 