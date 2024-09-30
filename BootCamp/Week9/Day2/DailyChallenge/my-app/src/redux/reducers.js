import { ADD_TASK, UPDATE_TASK, TOGGLE_TASK_EDIT, TOGGLE_TASK_DONE, DELETE_TASK } from "./actions";

const initialState = {
    tasks: [],
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state,
                tasks: [...state.tasks, action.payload],};
        case UPDATE_TASK:
            return {...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                        ? { ...task, task: action.payload.task, date: action.payload.date, edit: false }
                        : task
                ),
            };
        case TOGGLE_TASK_EDIT:
            return {...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload
                        ? { ...task, edit: !task.edit }
                        : task
                ),
            };
        case TOGGLE_TASK_DONE:
            return {...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload
                        ? { ...task, done: !task.done }
                        : task
                ),
            };
        case DELETE_TASK:
            return {...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),};
        default:
            return state;
    }
};