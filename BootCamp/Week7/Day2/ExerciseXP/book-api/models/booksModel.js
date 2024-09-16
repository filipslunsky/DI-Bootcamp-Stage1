const { db } = require('../config/data.js');

const _getAllBooks = () => {
    return db('books').select('id', 'title', 'author', 'publishedyear').orderBy('id');
};

const _getBookById = (id) => {
    return db('books').select('id', 'title', 'author', 'publishedyear').where({id});
};

const _addBook = (title, author, publishedyear) => {
    return db('books').insert({title, author, publishedyear}).returning(['id', 'title', 'author', 'publishedyear']);
};


module.exports = {
    _getAllBooks,
    _getBookById,
    _addBook
};