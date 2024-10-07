import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, toggleTaskComplete, deleteTask } from './state/slice';
import { useState } from 'react';
import { selectTasks, selectCategories, selectCompletedTasks } from './state/selectors';
import CategorySelector from './CategorySelector';

const TasksList = () => {
    const [newTaskName, setNewTaskName] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingTaskName, setEditingTaskName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filter, setFilter] = useState('All');

    const tasks = useSelector(selectTasks);
    const completedTasks = useSelector(selectCompletedTasks);
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (newTaskName && selectedCategory) {
            dispatch(addTask({ name: newTaskName, category: selectedCategory }));
            setNewTaskName('');
            setSelectedCategory('');
        }
    };

    const handleEditTask = (id) => {
        if (editingTaskId === id) {
            dispatch(editTask({ id, name: editingTaskName, category: selectedCategory }));
            setEditingTaskId(null);
            setEditingTaskName('');
            setSelectedCategory('');
        } else {
            const taskToEdit = tasks.find(task => task.id === id);
            if (taskToEdit) {
                setEditingTaskName(taskToEdit.name);
                setEditingTaskId(id);
                setSelectedCategory(taskToEdit.category);
            }
        }
    };

    const handleDeleteTask = (id) => {
        if (id) {
            dispatch(deleteTask(id));
        }
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleTaskComplete(id));
    };

    const handleNewTaskChange = (e) => {
        setNewTaskName(e.target.value);
    };

    const handleEditingTaskChange = (e) => {
        setEditingTaskName(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    let filteredTasks = tasks;

    if (filter === 'Completed') {
        filteredTasks = completedTasks;
    } else if (filter !== 'All') {
        filteredTasks = tasks.filter(task => task.category === filter);
    }

    return (
        <>
            <CategorySelector />
            <h2>Tasks</h2>
            <input
                type="text"
                placeholder='New task...'
                value={newTaskName}
                onChange={handleNewTaskChange}
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Select Category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <button onClick={handleAddTask}>Add Task</button>

            <h3>Filter Tasks</h3>
            <select value={filter} onChange={handleFilterChange}>
                <option value="All">All Tasks</option>
                <option value="Completed">Completed Tasks</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>

            <h3>Existing Tasks</h3>
            <ul>
                {filteredTasks.map(task => {
                    const category = categories.find(category => category.id == task.category);
                    const categoryName = category ? category.name : 'Uncategorized';

                    return (
                        <li key={task.id}>
                            {editingTaskId === task.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editingTaskName}
                                        onChange={handleEditingTaskChange}
                                    />
                                    <select value={selectedCategory} onChange={handleCategoryChange}>
                                        <option value="">Select Category</option>
                                        {categories.map(category => (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        ))}
                                    </select>
                                    <button onClick={() => handleEditTask(task.id)}>Save</button>
                                </>
                            ) : (
                                <>
                                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                        {task.name} ({categoryName})
                                    </span>
                                    <button onClick={() => handleToggleComplete(task.id)}>Toggle Complete</button>
                                    <button onClick={() => handleEditTask(task.id)}>Edit</button>
                                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default TasksList;
