import { createSelector } from '@reduxjs/toolkit';

import { state } from './slice';

export const selectUsers = createSelector([state], (state) => {
    return state.users;
});

export const selectStatus = createSelector([state], (state) => {
    return state.status;
});
