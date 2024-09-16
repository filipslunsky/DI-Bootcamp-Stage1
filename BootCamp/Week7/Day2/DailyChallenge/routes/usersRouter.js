const express = require('express');

const {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    loginUser

 } = require('../controllers/usersController.js');

const usersRouter = express.Router();

usersRouter.get('/users', getAllUsers);

usersRouter.get('/users/:id', getUserById);

usersRouter.post('/register', addUser);

usersRouter.put('/users/:id', updateUser);

usersRouter.post('/login', loginUser);

module.exports = {
    usersRouter
};

