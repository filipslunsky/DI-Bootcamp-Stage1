import { add } from './state/slice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

const TaskInput = (props) => {
    const inputRef = useRef();
    const dateRef = useRef();
    const dispatch = useDispatch();

    const addTask = () => {
        const value = inputRef.current.value;
        if (value === '') return;
        const date = dateRef.current.value;
        dispatch(add({value, date}));
        inputRef.current.value = '';
        dateRef.current.value = '';
    };

    return (
        <>
            <input ref={inputRef} placeholder='add task...' />
            <input ref={dateRef} type='date' />
            <button onClick={() => addTask()}>Add Task</button>
        </>
    );
}
 
export default TaskInput;