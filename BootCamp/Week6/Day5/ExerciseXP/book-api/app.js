import express from 'express';

const books = [
    {
        id: 1,
        title: 'Winnie the Pooh',
        author: 'A. A. Milne',
        publishedYear: 1975
    },{
        id: 2,
        title: 'Animal Farm',
        author: 'George Orwell',
        publishedYear: 1953
    },{
        id: 3,
        title: 'Dracula',
        author: 'Bram Stoker',
        publishedYear: 1983
    }
];

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.use(express.json());

// getting all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// getting one book by ID
app.get('/api/books/:bookId', (req, res) => {
    const { bookId } = req.params;
    const indx = books.findIndex(item => item.id == bookId);
    if (indx === -1) {
        res.status(404).send('Book not found');
    } else {
        res.status(200).json(books[indx]);
    } 
});

// creating a new book entry
app.post('/api/books', (req, res) => {
    let maxId = 0;
    for (let book of books) 
        maxId = book.id > maxId ? book.id : maxId;
    let newId = maxId + 1;
    const { title, author, publishedYear } = req.body;
    const newBook = {id: newId, title: title, author: author, publishedYear: publishedYear};
    books.push(newBook);
    res.status(201).json(newBook);
});