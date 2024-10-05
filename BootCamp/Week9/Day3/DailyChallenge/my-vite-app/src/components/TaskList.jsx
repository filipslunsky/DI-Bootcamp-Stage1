import { useSelector } from 'react-redux';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

const TaskList = ({ selectedDate }) => {
  const tasks = useSelector((state) => state.tasks.tasksByDate[selectedDate] || []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <EditTask selectedDate={selectedDate} task={task} />
          <DeleteTask selectedDate={selectedDate} taskId={task.id} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
