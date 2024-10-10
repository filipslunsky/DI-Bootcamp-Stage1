interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
};

class Library {
    private books: Book[] = [];
    constructor() {
        this.books = [];
    };

    public addBook(book: Book): void {
        this.books.push(book);
    };

    public getAllBooks(): Book[] {
        return this.books;
    };

    public getBookDetails(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    };
};

class DigitalLibrary extends Library {
    readonly website: string;
    constructor(website: string) {
        super();
        this.website = website;
    };

    public listBooks(): string[] {
        const books = this.getAllBooks();
        return books.map(book => book.title);
    };
};

const myDigitalLibrary = new DigitalLibrary('https://www.mylibrary.com');

myDigitalLibrary.addBook({
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    isbn: '1234567890',
    publishedYear: 1951,
    genre: 'Fiction',
});

myDigitalLibrary.addBook({
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0987654321',
    publishedYear: 1960,
});

console.log(myDigitalLibrary.listBooks()); // -> array of book titles
console.log(myDigitalLibrary.getBookDetails('1234567890')); // -> one book object since the book isbn exists
console.log(myDigitalLibrary.getBookDetails('123')); // -> undefined since the isbn does not exist
