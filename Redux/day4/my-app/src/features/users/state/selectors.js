import { createSelector } from '@reduxjs/toolkit';

import { state, author } from './slice';

export const selectUsers = createSelector([state], (state) => {
    return state.users;
});

export const selectAuthor = createSelector([state], (state) => {
    return state.author;
});

export const selectStatus = createSelector([state], (state) => {
    return state.status;
});
