const express = require('express');
const {
    getAllUsers,
    getUserById,
    updateUser,
    createUser,
    loginUser

} = require('../controllers/usersController.js');

const usersRouter = express.Router();

usersRouter.get('/users', getAllUsers);

usersRouter.get('/users/:id', getUserById);

usersRouter.put('/users/:id', updateUser);

usersRouter.post('/register', createUser);

usersRouter.post('/login', loginUser);

module.exports = {
    usersRouter
};