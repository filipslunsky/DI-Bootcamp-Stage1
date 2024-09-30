import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoActions = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo(task));
        setTask('');
    };

    return (
        <>
            <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </>
    );
}
 
export default TodoActions;
