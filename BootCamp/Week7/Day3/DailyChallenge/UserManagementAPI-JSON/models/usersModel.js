const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const jsonFilePath = path.resolve(__dirname, '../config/', 'users.json');

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

const _getAllUsers = async () => {
    const data = await getData();
    const users = JSON.parse(data);
    const usernames = users.map(item => item.username);
    return usernames;
};

const _getUserById = async (id) => {
    const data = await getData();
    const users = JSON.parse(data);
    const index = users.findIndex(item => item.id == id);
    if (index === -1) {
        return {message: `user id ${id} not found`}
    } else {
        return users[index].username;
    }
};

const _updateUser = async (id, username, plainPassword) => {
    const data = await getData();
    const users = JSON.parse(data);
    const index = users.findIndex(item => item.id == id);
    if (index === -1) {
        return {message: `user id ${id} not found`}
    } else {
        const password = await bcrypt.hash(plainPassword, 10);
        users[index] = {...users[index], username, password};
        writeData(users);
        return users;
    }
};

const _createUser = async (username, plainPassword) => {
    const data = await getData();
    const users = JSON.parse(data);
    const id = users.length + 1;
    const password = await bcrypt.hash(plainPassword, 10);
    const newUser = {id, username, password};
    users.push(newUser);
    writeData(users);
    return newUser;
};

const _loginUser = async (username) => {
    const data = await getData();
    const users = JSON.parse(data);
    const index = users.findIndex(item => item.username == username);
    if (index === -1) {
        return {message: `not found`}
    } else {
        return users[index];
    }
};

module.exports = {
    _getAllUsers,
    _getUserById,
    _updateUser,
    _createUser,
    _loginUser
}