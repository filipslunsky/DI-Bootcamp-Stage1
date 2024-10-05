import './App.css';
import { useState } from 'react';
import DatePickerComponent from './components/DatePicker';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Format date as YYYY-MM-DD

  const handleDateChange = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  return (
    <div>
      <h1>Task Manager for {selectedDate}</h1>
      <DatePickerComponent onDateChange={handleDateChange} />
      <AddTask selectedDate={selectedDate} />
      <TaskList selectedDate={selectedDate} />
    </div>
  );
};

export default App;
