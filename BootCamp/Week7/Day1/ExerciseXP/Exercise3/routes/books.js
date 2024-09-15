const express = require('express');

const router = express.Router();

const books = [{id: 1, title: 'Animal Farm', author: 'George Orwell', rating: 8.2},{id: 2, title: 'Nineteen Eighty-Four', author: 'George Orwell', rating: 9.3},{id: 3, title: 'Lord of the Rings', author: 'J. R. R. Tolkien ', rating: 7.3}];

router.use(express.json());

// Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
    const { title, author, rating } = req.body;
    const id = books.length + 1;
    const newTask = {id, title, author, rating};
    books.push(newTask);
    res.json(books);
});

// Update a book by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, rating } = req.body;
    const index = books.findIndex(item => item.id == id);
    if (index === -1) {
        return res.status(404).json({ message: "book to update not found" });
    }
    books[index] = {...books[index], title, author, rating};
    res.json(books);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(item => item.id == id);
    if (index === -1) {
        return res.status(404).json({ message: "book to delete not found" });
    }
    books.splice(index, 1);
    res.json(books);
});

module.exports = {
    router
};