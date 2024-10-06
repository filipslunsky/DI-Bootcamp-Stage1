import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    status: ''
};

export const fetchUsers = createAsyncThunk('users/fetch', async() => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();
    return data;
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'success';
            state.users = action.payload;
        })
    }
});

export default usersSlice.reducer;