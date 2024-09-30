import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/actions';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id))
    };

    return (
    <>
        <ul>
            {
            todos.map((item) => (
                <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                {item.task}
                <button onClick={() => handleToggleTodo(item.id)}>{item.completed ? 'undo' : 'check'}</button>
                <button onClick={() => handleRemoveTodo(item.id)}>remove task</button>
                </li>
            ))
            }
        </ul>
    </>);
}
 
export default TodoList;