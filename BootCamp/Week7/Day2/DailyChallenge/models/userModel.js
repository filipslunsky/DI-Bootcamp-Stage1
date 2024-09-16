const bcrypt = require('bcrypt');
const { db } = require("../config/data.js");

const _getAllUsers = () => {
    return db('users').select('id', 'email', 'username', 'first_name', 'last_name').orderBy("id");
};

const _getUserById = (id) => {
    return db('users').select('id', 'email', 'username', 'first_name', 'last_name').where({id});
};

const _addUser = async (email, username, first_name, last_name, password) => {
    const cryptedPassword = await bcrypt.hash(password, 10);
    return db.transaction(async (trx) => {
        const [newUser] = await trx('users')
            .insert({
                email: email,
                username: username,
                first_name: first_name,
                last_name: last_name
            })
            .returning(['id', 'email', 'username', 'first_name', 'last_name']);

        await trx('hashpwd').insert({
            username: username,
            password: cryptedPassword
        });

        return newUser;
    });
};

const _updateUser = async (id, email, username, first_name, last_name, password) => {
    const cryptedPassword = await bcrypt.hash(password, 10);
    return db.transaction(async (trx) => {
        const [updatedUser] = await trx('users')
            .update({
                email: email,
                first_name: first_name,
                last_name: last_name
            }).where({id})
            .returning(['id', 'email', 'username', 'first_name', 'last_name']);

        await trx('hashpwd').update({
            password: cryptedPassword
        }).where({username});

        return updatedUser;
    });
};

const _loginUser = (username) => {
    return db('hashpwd').select('password').where({username});
};

module.exports = {
    _getAllUsers,
    _getUserById,
    _addUser,
    _updateUser,
    _loginUser
};