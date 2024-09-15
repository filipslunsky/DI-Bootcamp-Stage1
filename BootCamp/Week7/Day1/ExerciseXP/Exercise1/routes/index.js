const express = require('express');
const { getAll } = require('../controllers/controllers.js');

const router = express.Router();

router.get('/', getAll);

module.exports = {
    router
};