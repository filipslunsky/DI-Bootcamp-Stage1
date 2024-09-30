// import { createStore, combineReducers } from 'redux';
import { configureStore, combineReducers } from 'redux';

import { counterReducer } from './reducers';

const reducer = combineReducers({
    counterReducer,
});

// const store = createStore(reducer);

const store = configureStore({
    reducer
});

export default store;