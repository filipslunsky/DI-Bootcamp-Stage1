import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { toggleTaskDone, toggleTaskEdit, updateTask, deleteTask } from "../redux/actions";

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);

    const [editValues, setEditValues] = useState({ task: '', date: '', id: null });

    const dispatch = useDispatch();


    const handleToggleTaskEdit = (id, currentTask, currentDate) => {
        dispatch(toggleTaskEdit(id));
        setEditValues({ task: currentTask, date: currentDate, id });
    };

    const handleUpdateTask = () => {
        if (editValues.id !== null) {
            dispatch(updateTask(editValues.id, editValues.task, editValues.date));
        }
    };

    const handleToggleTaskDone = (id) => {
        dispatch(toggleTaskDone(id));
    };

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    };

    return (
        <>
            <h2>My Tasks</h2>
            {
                tasks.map(item => {
                    return (
                        <div key={item.id} style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                            {!item.edit
                            ?
                            <div>
                                <span onClick={() => {handleToggleTaskDone(item.id)}} className="taskName">{item.task}</span>
                                <span onClick={() => {handleToggleTaskDone(item.id)}} className="taskDate">{item.date}</span>
                                <button className="editButton" onClick={() => {handleToggleTaskEdit(item.id, item.task, item.date)}}>edit</button>
                                <button className="deleteButton" onClick={() => {handleDeleteTask(item.id)}}>delete</button>
                            </div>
                            :
                            <div>
                                <input
                                type="text"
                                value={editValues.task}
                                onChange={(e) => setEditValues({ ...editValues, task: e.target.value })}
                                />
                                <input 
                                type="date"
                                value={editValues.date}
                                onChange={(e) => setEditValues({ ...editValues, date: e.target.value })}
                                />
                                <button className="affirmButton" onClick={handleUpdateTask}>save</button>
                            </div>
                            }
                        </div>
                    )
                })
            }
        </>
    );
}
 
export default TaskList;