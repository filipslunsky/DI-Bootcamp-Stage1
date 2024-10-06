import TaskRemove from "./TaskRemove";
import { useDispatch } from 'react-redux';
import { active } from './state/slice';
import './tasks.css';

const TaskItem = (props) => {
    const dispatch = useDispatch();

    const changeActiveTask = () => {
        dispatch(active(id));
    };

    return (
        <>
            <div>
                <span onClick={() => changeActiveTask()} className={props.active ? '' : 'active'}>
                {props.task} {props.dueDate}
                </span>    
                <TaskRemove id={props.id}/>
            </div>
        </>
    );
}
 
export default TaskItem;