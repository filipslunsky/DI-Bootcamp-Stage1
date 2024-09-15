const express = require('express');

const todos = [{id: 1, name: 'feed the cat', done: false}, {id: 2, name: 'water plants', done: true}, {id: 3, name: 'do some coding', done: true}];

const router = express.Router();
router.use(express.json());

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const { name } = req.body;
    const id = todos.length + 1;
    const done = false;
    const newTask = {id, name, done};
    todos.push(newTask);
    res.json(todos);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, done } = req.body;
    const index = todos.findIndex(item => item.id == id);
    if (index === -1) {
        return res.status(404).json({ message: "task to update not found" });
    }
    todos[index] = {...todos[index], name, done};
    res.json(todos);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(item => item.id == id);
    if (index === -1) {
        return res.status(404).json({ message: "task to delete not found" });
    }
    todos.splice(index, 1);
    res.json(todos);
});


module.exports = {
    router
};