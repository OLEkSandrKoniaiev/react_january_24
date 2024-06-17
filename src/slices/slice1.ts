import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type CounterStateType = {
    value: number
};

const initialState: CounterStateType = {
    value: 0
};

export const counter1Slice = createSlice({
    name: 'counter1',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        customIncrement: (state,
                    action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});

export const {
    increment,
    customIncrement,
    decrement,
    reset
} = counter1Slice.actions;
