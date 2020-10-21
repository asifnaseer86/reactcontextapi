import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispach] = useReducer(counterReducer, 5);

    return (
        <div>
            <h3>Value of reducer = {state}</h3>
            <button onClick={() =>  dispach('INCREMENT') }>Incremnet Reducer</button>
            <button onClick={() =>  dispach('DECREMENT') }>DECREMENT Reducer</button>

        </div>
    );
}

export default Child2;