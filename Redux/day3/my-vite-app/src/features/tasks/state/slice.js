import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    active: true,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action) => {
            state.tasks.push({
                id: nanoid(),
                task: action.payload.value,
                dueDate: action.payload.date,
                active: true,
            });
            state.tasks = state.tasks.sort(
                (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
            );
        },
        remove: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        active: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            if (task) {
                task.active = !task.active;
            }
        },
    }
});

export const { add, remove, active } = tasksSlice.actions;
export default tasksSlice.reducer;