const bcrypt = require('bcrypt');
const {
    _getAllUsers,
    _getUserById,
    _updateUser,
    _createUser,
    _loginUser

} = require('../models/usersModel.js');

const getAllUsers = async (req, res) => {
    try {
        const data = await _getAllUsers();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _getUserById(id);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;
    try {
        const data = await _updateUser(id, username, password);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
};

const createUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const data = await _createUser(username, password);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await _loginUser(username);
        if(user.message === 'not found') {
            res.json({message: `${username} does not exist`})
        } else {
            const match = await bcrypt.compare(password, user.password);
            res.json({message: match});
        }
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    createUser,
    loginUser
};