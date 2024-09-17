const fs = require('fs');
const path = require('path');

const jsonFilePath = path.resolve(__dirname, '../config/', 'tasks.json');

const getData = () => {    
    return new Promise ((res, rej) => {
        fs.readFile(jsonFilePath, 'utf-8', (error, data) => {
            if(error) {
                return rej(error);
            }
            res(data);
        });
    })
};

const writeData = (data) => {
    const jsonData = JSON.stringify(data, null, 2);
    return new Promise ((res, rej) => {
        fs.writeFile(jsonFilePath, jsonData, 'utf-8', (error) => {
            if (error) {
                return rej(error);
            }
            res();
        })
    })
};


const _getAllTasks = async () => {
    const jsonData = await getData();
    const tasks = JSON.parse(jsonData);
    return tasks;
};

const _getTaskById = async (id) => {
    const jsonData = await getData();
    const tasks = JSON.parse(jsonData);
    const index = tasks.findIndex(item => item.id == id);
    if (index === -1) {return {message: `task with id ${id} not found`}
    } else {
        return tasks[index];
    };
};

const _addTask = async (title, description) => {
    const jsonData = await getData();
    const tasks = JSON.parse(jsonData);
    const id = tasks.length + 1;
    const completed = false;
    const newTask = {id, title, description, completed};
    tasks.push(newTask);
    writeData(tasks);
    return tasks;
};

const _updateTask = async (id, title, description, completed) => {
    const jsonData = await getData();
    const tasks = JSON.parse(jsonData);
    const index = tasks.findIndex(item => item.id == id);
    if (index === -1) {
        return {message: `task with id ${id} not found`}
    } else {
        tasks[index] = {...tasks[index], title, description, completed};
        writeData(tasks);
        return tasks[index];
    };
};

const _deleteTask = async (id) => {
    const jsonData = await getData();
    const tasks = JSON.parse(jsonData);
    const index = tasks.findIndex(item => item.id == id);
    if (index === -1) {
        return {message: `task with id ${id} not found`}
    } else {
        const deletedTask = tasks[index];
        tasks.splice(index, 1);
        writeData(tasks);
        return deletedTask;
    };
};

module.exports = {
    _getAllTasks,
    _getTaskById,
    _addTask,
    _updateTask,
    _deleteTask
};
