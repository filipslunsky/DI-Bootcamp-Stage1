import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addTask } from "../redux/actions";

const NewTask = () => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task === '') {
            return;
        };
        dispatch(addTask(task, date));
        setTask('');
        setDate('');
    };

    return (
        <>
            <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Description..."
            />
            <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date..."
            />
            <button className="affirmButton" onClick={handleAddTask}>add Task</button>
        </>
    );
}
 
export default NewTask;