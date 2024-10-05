import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/tasks/taskSlice';

const EditTask = ({ selectedDate, task }) => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState(task.text);

  const handleEditTask = () => {
    dispatch(editTask({ date: selectedDate, id: task.id, updatedTask: { text: taskText } }));
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleEditTask}>Save</button>
    </div>
  );
};

export default EditTask;

