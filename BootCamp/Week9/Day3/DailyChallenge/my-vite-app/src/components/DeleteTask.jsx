import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';

const DeleteTask = ({ selectedDate, taskId }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask({ date: selectedDate, id: taskId }));
  };

  return <button onClick={handleDeleteTask}>Delete</button>;
};

export default DeleteTask;
