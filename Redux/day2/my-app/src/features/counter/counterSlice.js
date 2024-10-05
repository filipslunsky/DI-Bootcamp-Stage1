import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            // return {...state, count: state.count + 1} - no need to clone, Immer does it automatically
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = initialState.count;
        },

        incrementByNumber: (state, action) => {
            state.count += action.payload;
        },

        incrementByTwoNumbers: (state, action) => {
            state.count += (action.payload.numOne + action.payload.numTwo);
        },

        incrementWithPrepare: {
            reducer(state, action) {

            },
            prepare(numOne, numTwo) {
                return { payload: numOne + numTwo };
            },
        }
    },
});

export const { increment, decrement, reset, incrementByNumber, incrementByTwoNumbers, incrementWithPrepare } = counterSlice.actions;
export default counterSlice.reducer;