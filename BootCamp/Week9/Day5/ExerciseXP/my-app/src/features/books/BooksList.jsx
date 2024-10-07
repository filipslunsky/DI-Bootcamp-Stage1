import { useSelector } from 'react-redux';
import { selectBooks, selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from './state/selectors';
import { useState, useEffect } from 'react';

const BooksList = (props) => {
    const allBooks = useSelector(selectBooks);
    const horrorBooks = useSelector(selectHorrorBooks);
    const fantasyBooks = useSelector(selectFantasyBooks);
    const scienceFicitonBooks = useSelector(selectScienceFictionBooks);

    const [option, setOption] = useState('all');
    const [books, setBooks] = useState(allBooks);

    const handleSelect = (e) => {
        setOption(e.target.value);
    };

    const displayBooks = () => {
        switch (option) {
            case 'all':
                setBooks(allBooks)                
                break;
            case 'horror':
                setBooks(horrorBooks)                
                break;
            case 'fantasy':
                setBooks(fantasyBooks)                
                break;
            case 'science-fiction':
                setBooks(scienceFicitonBooks)                
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        displayBooks();
    }, [option]);

    return (
        <>
            <h2>Books List</h2>
            <select onChange={(e) => handleSelect(e)}>
                <option value="all">all books</option>
                <option value="horror">horror books</option>
                <option value="fantasy">fantasy books</option>
                <option value="science-fiction">science-fiction books</option>
            </select>
            {
                books.map(book => {
                    return (
                        <div key={book.id}>
                            <h3>{book.title}</h3>
                            <h5>{book.author}</h5>
                            <p>{book.genre}</p>
                        </div>
                    )
                })
            }
        </>
    );
}
 
export default BooksList;