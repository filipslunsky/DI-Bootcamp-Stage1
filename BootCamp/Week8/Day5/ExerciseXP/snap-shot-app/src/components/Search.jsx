import { Link } from 'react-router-dom';
import './Search.css';
import './PhotosComponent.css';
import { useState } from 'react';

const Search = (props) => {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        const newInput = e.target.value;
        setInput(newInput);
    };

    return (
        <>
        <form>
            <input onChange={(e) => {handleInput(e)}} type="text" name='search'/>
            <button disabled={!input.trim()}>
                    {input.trim() ? (
                        <Link to={`/search/${input}`}>
                            <span className="material-icons">search</span>
                        </Link>
                    ) : (
                        <span className="material-icons">search</span>
                    )}
                </button>
        </form>
        </>
    );
}
 
export default Search;