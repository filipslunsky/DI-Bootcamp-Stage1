const {
    _getAllTasks,
    _getTaskById,
    _addTask,
    _updateTask,
    _deleteTask
} = require('../models/tasksModel.js');

const getAllTasks = async (req, res) => {
    try {
        const data = await _getAllTasks();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
};

const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _getTaskById(id);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }  
};

const addTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const data = await _addTask(title, description);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
        const data = await _updateTask(id, title, description, completed);
        res.json(data);        
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _deleteTask(id);
        res.json(data);    
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask
};