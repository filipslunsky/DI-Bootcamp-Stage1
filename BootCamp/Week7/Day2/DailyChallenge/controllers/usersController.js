const bcrypt = require('bcrypt');
const {
    _getAllUsers,
    _getUserById,
    _addUser,
    _updateUser,
    _loginUser

} = require('../models/userModel.js');

const getAllUsers = async (req, res) => {
    try {
        const data = await _getAllUsers();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _getUserById(id);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(404).json({message: 'user not found'})
    }
};

const addUser = async (req, res) => {
    const { email, username, first_name, last_name, password } = req.body;
    try {
        const data = await _addUser(email, username, first_name, last_name, password);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(403).json({message: 'impossible to create user'})
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, username, first_name, last_name, password } = req.body;
    try {
        const data = await _updateUser(id, email, username, first_name, last_name, password);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(403).json({message: 'impossible to update user'})
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const data  = await _loginUser(username);
        const cryptedPassword = data[0].password;
        const match = await bcrypt.compare(password, cryptedPassword);
        res.json({username: username, loggedIn: match});
    } catch (error) {
        console.log(error);
        res.json({message: 'wrong username'});
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    loginUser
};