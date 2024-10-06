import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    status: '',
};

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'success';
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.status = 'failure';
        })
    }
});

export default usersSlice.reducer;