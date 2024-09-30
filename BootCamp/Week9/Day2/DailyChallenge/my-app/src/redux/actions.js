export const ADD_TASK = 'add_task';
export const UPDATE_TASK = 'update_task';
export const TOGGLE_TASK_EDIT = 'toggle_task_edit';
export const TOGGLE_TASK_DONE = 'toggle_task_done';
export const DELETE_TASK = 'delete_task';

export const addTask = (task, date) => {
    return {
        type: ADD_TASK,
        payload: {
            id: new Date().getTime(),
            task,
            date,
            done: false,
            edit: false,
        },
    };
};

export const updateTask = (id, task, date) => {
    return {
        type: UPDATE_TASK,
        payload: {
            id,
            task,
            date,
        },
    };
};

export const toggleTaskEdit = (id) => {
    return {
        type: TOGGLE_TASK_EDIT,
        payload: id,
    };
};

export const toggleTaskDone = (id) => {
    return {
        type: TOGGLE_TASK_DONE,
        payload: id,
    };
};

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    };
};