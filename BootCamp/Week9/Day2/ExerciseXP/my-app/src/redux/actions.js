export const ADD_TODO = 'add_todo';
export const TOGGLE_TODO = 'toggle_todo';
export const REMOVE_TODO = 'remove_todo';

export const addTodo = (task) => {
    return {
        type: ADD_TODO,
        payload: {
            id: new Date().getTime(),
            task,
            completed: false,
        },
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id,
    };
};

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id,
    };
};