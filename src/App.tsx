import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment} from "./slices/slice1";


const App = () => {

    const value = useAppSelector((state) => state.slice1.value);

    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => {
                dispatch(increment(100));
            }}>
                increment
            </button>
            <button onClick={() => {
                dispatch(decrement());
            }}>
                decrement
            </button>
        </div>
    );
};

export default App;
