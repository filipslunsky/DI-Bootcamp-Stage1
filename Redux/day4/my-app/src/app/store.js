import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/state/slice';
import usersReducer from '../features/users/state/slice';
import loggerMiddleware from '../middleware/redusxLogger';

const appReducer = combineReducers({
    postsReducer,
    usersReducer
});

const store = configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;