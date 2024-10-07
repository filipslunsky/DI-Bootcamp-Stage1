import { createSelector } from '@reduxjs/toolkit';
import { state } from './slice';

export const selectTasks = createSelector([state], (tasksState) => tasksState.tasks);

export const selectCompletedTasks = createSelector([selectTasks], (tasks) => tasks.filter((task) => task.completed === true));

export const selectTasksByCategory = (category) => createSelector([selectTasks], (tasks) => tasks.filter((task) => task.category === category));

export const selectCategories = createSelector([state], (tasksState) => tasksState.categories);

export const selectCategoryById = (id) => createSelector([selectCategories], (categories) => categories.find((category) => category.id === id));