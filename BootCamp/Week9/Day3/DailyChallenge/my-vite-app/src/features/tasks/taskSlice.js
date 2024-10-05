import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDate: {},
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push({ ...task, id: Date.now(), completed: false });
    },
    editTask: (state, action) => {
      const { date, id, updatedTask } = action.payload;
      const tasks = state.tasksByDate[date] || [];
      const taskIndex = tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
      }
    },
    deleteTask: (state, action) => {
      const { date, id } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date].filter(task => task.id !== id);
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
