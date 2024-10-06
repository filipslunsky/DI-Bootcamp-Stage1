import { useDispatch } from 'react-redux';
import { remove } from './state/slice';

const TaskRemove = (props) => {
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(remove(props.id));
    };

    return (
        <>
            <button onClick={() => removeTask()}> X </button>
        </>
    );
}
 
export default TaskRemove;