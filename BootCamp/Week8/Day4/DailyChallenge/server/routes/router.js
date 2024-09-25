const express = require('express');
const {
    getData,
    postData
} = require('../controllers/controller.js');

const router = express.Router();

router.get('/hello', getData);

router.post('/world', postData);


module.exports = {
    router
};