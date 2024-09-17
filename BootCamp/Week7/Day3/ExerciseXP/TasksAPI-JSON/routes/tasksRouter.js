const express = require('express');
const {
    getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask
} = require('../controllers/tasksController.js');

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);

tasksRouter.get('/:id', getTaskById);

tasksRouter.post('/', addTask);

tasksRouter.put('/:id', updateTask);

tasksRouter.delete('/:id', deleteTask);


module.exports =  { tasksRouter };

