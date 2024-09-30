import './App.css';
import { useReducer, createContext, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TasksList from './components/TaskList';

export const TasksContext = createContext();

const initialState = {
  tasks: []
};

// action constants
const ADD_TASK = "add_task";
export const REMOVE_TASK = "remove_task";

const taskReducer = (state, action) => {
  if (action.type === ADD_TASK) {
    const newTasks = [...state.tasks];
    newTasks.push({ id: uuidv4(), name: action.payload, active: true });
    return { ...state, tasks: newTasks };
  } else if (action.type === REMOVE_TASK) {
    const notDeletedTasks = state.tasks.filter((item) => item.id !== action.id);
    return { ...state, tasks: notDeletedTasks };
  }
  return state;
};


function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const inputRef = useRef();

  const addTask = () => {
    const value = inputRef.current.value;
    dispatch({ type: ADD_TASK, payload: value });
    inputRef.current.value = "";
  };

  return (
    <>
    <TasksContext.Provider value={{ state, dispatch }}>
      <h2>Task Manager</h2>
      <div>
        <input type="text" placeholder='add task' ref={inputRef} />
        <button onClick={() => addTask()}>add</button>
      </div>
      <div>
        <h2>List of Tasks</h2>
        <TasksList />
      </div>
      </TasksContext.Provider>
    </>
  )
}

export default App;
