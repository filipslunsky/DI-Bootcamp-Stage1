import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    age: 38,
    loading: false,
};

export const ageUpAsync = createAsyncThunk('age/increment', () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(1);
        }, 1 * 1000)
    })
}); 

export const ageDownAsync = createAsyncThunk('age/decrement', () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(1);
        }, 1.1 * 1000)
    })
}); 

const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(ageUpAsync.pending, (state) => {
            state.loading = true;
        })
        .addCase(ageUpAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.age += action.payload;
        })
        .addCase(ageDownAsync.pending, (state) => {
            state.loading = true;
        })
        .addCase(ageDownAsync.fulfilled, (state, action) => {
            state.age -= action.payload;
            state.loading = false;
        })
    }
});

export default ageSlice.reducer;