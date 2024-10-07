import { useSelector } from 'react-redux';
import { addTask, editTask, toggleTaskComplete, deleteTask, addCategory, editCategory, deleteCategory } from './state/slice';
import { useState, useEffect } from 'react';

const TasksList = () => {
    return (
       <>
            <h2>My Tasks</h2>
       </> 
    );
}
 
export default TasksList;