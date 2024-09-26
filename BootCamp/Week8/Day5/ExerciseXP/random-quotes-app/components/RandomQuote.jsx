import quotes from "../src/assets/QuotesDatabase.jsx";
import { useState, useEffect } from 'react';

const RandomQuote = (props) => {
    const getRandomQuote = () => {
        const randInd = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randInd];
        console.log(randomQuote);
        return randomQuote;
    };

    const [quote, setQuote] = useState(getRandomQuote());

    const handleClick = () => {
        setQuote(getRandomQuote());
    };

    useEffect(() => {
        getRandomQuote();
    }, []);
    
    return (
        <>
            <h1>"{quote.quote}"</h1>
            <p>- {quote.author.length === 0 ? 'unknown author' : quote.author} -</p>
            <button onClick={handleClick}>New quote</button>
        </>
    );
}
 
export default RandomQuote;