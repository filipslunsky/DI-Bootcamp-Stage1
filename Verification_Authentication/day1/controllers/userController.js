const userModel = require("../models/userModel.js");
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    registerUser: async(req, res) => {
        const {password, email} = req.body;

        try {
            const user = await userModel.createUser(password, email)
            res.status(201).json({
                message: 'user registered successfully',
                user
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'internal server error'})
        }
    },
    loginUser: async(req, res) => {
        const {password, email} = req.body;
        try {
            const user = await userModel.getUserByEmail(email);
            if (!user) {
                return res.status(404).json({message: 'user not found'})
            }
            const passwordMatch = await bcrypt.compare(password+'', user.password);
            if (!passwordMatch) {
                return res.status(403).json({message: 'wrong password'})
            }
            /**generating token */
            const accessToken = jwt.sign(
                {
                    userId: user.id,
                    email: user.email
                },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '60s'}
            );
            res.cookie('token', accessToken, {
                maxAge: 60 * 1000,
                httpOnly: true
            });
            res.json({
                message: 'login success',
                user: {userid: user.id, email: user.email},
                token: accessToken
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'internal server error'})
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await userModel.getUsers();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'internal server error'})
        }
    },
    logoutUser: (req, res) => {
        res.clearCookie('token');
        delete req.cookies.token;
        delete req.headers['x-access-token'];
        res.sendStatus(200);
    },
    verifyAuth: (req, res) => {

        const { userid, email } = req.userinfo;
        const accessToken = jwt.sign(
            {userid, email},
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '60s'}
        );
        res.cookie('token', accessToken, {
            maxAge: 60 * 1000,
            httpOnly: true
        });
        res.json({
            message: 'verify auth',
            user: {userid, email},
            token: accessToken
        })
    }
};