const {
    _getAllBooks,
    _getBookById,
    _addBook

 } = require('../models/booksModel');

const getAllBooks = async (req, res) => {
    try {
        const data = await _getAllBooks();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
};

const getBookById = async (req, res) => {
    const { bookId } = req.params;
    try {
        const data = await _getBookById(bookId);
        res.status(200).json(data);        
    } catch (error) {
        console.log(error);
        res.status(404).json({message: 'book not found'})
    }
};

const addBook = async (req, res) => {
    const {title, author, publishedYear} = req.body;
    try {
        const data = await _addBook(title, author, publishedYear);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: 'book was not added'})
    }
};


module.exports = {
    getAllBooks,
    getBookById,
    addBook
};
