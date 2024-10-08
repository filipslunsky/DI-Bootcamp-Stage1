import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
    users: [],
    status: '',
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const res = await fetch(USERS_URL);
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
            state.status = 'failed';
        })
    }
});

export const state = (state) => state.usersReducer;

export const {} = usersSlice.actions;
export default usersSlice.reducer;