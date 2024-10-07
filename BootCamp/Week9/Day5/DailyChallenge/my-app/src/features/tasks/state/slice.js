import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    nextTaskId: 1,
    categories: [],
    nextCategoryId: 1,
    editingTaskId: null,
    editingCategoryId: null,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload);
            state.tasks.push({
                id: state.nextTaskId,
                name: action.payload.name,
                category: action.payload.category,
                completed: false
            });
            state.nextTaskId++;
            console.log(state.tasks);
        },
        editTask: (state, action) => {
            const { id, name, category } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                if (name !== undefined) task.name = name;
                if (category !== undefined) task.category = category;
            }
        },
        toggleTaskComplete: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        addCategory: (state, action) => {
            state.categories.push({
                id: state.nextCategoryId,
                name: action.payload,
            });
            state.nextCategoryId++;
        },
        editCategory: (state, action) => {
            const { id, name } = action.payload;
            const category = state.categories.find((category) => category.id === id);
            if (category) {
                if (name !== undefined) category.name = name;
            }
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter((category) => category.id != action.payload);
        },
        toggleEditTask: (state, action) => {
            if (state.editingTaskId === action.payload) {
                state.editingTaskId = null;
            } else {
                state.editingTaskId = action.payload;
            }
        },
        toggleEditCategory: (state, action) => {
            if (state.editingCategoryId === action.payload) {
                state.editingCategoryId = null;
            } else {
                state.editingCategoryId = action.payload;
            }
        }
    }
});

export const state = (state) => state.tasksReducer;

export const { 
    addTask, 
    editTask, 
    toggleTaskComplete, 
    deleteTask, 
    addCategory, 
    editCategory, 
    deleteCategory,
    toggleEditTask,
    toggleEditCategory
} = tasksSlice.actions;

export default tasksSlice.reducer;
