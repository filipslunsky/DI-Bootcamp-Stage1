import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { id: 1, name: "Jhon", email: "jjj@gmail.com" },
        { id: 2, name: "Anne", email: "aaa@gmail.com" },
        { id: 3, name: "Dan", email: "ddd@gmail.com" },
    ]
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push({
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email,
            });
        },
    },
});


export const {addUser} = usersSlice.actions;
export default usersSlice.reducer;
