const express = require('express');

const {
    getAllBooks,
    getBookById,
    addBook

} = require('../controllers/booksController.js');

const booksRouter = express.Router();

booksRouter.get('/', getAllBooks);

booksRouter.get('/:bookId', getBookById);

booksRouter.post('/', addBook);


module.exports = {
    booksRouter
};