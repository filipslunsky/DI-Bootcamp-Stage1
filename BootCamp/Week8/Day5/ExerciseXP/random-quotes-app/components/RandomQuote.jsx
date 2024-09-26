import quotes from "../src/assets/QuotesDatabase.jsx";
import colors from "../src/assets/ColorsDatabase.jsx";
import { useState } from 'react';
import './RandomQuote.css';

const RandomQuote = (props) => {
    const getRandomQuote = () => {
        const randInd = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randInd];
        console.log(randomQuote);
        return randomQuote;
    };

    const getRandomColour = () => {
        const randInd = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randInd];
        console.log(randomColor);
        return randomColor;
        
    };

    const [quote, setQuote] = useState(getRandomQuote());
    const [color, setColor] = useState(getRandomColour());

    const handleClick = () => {
        setQuote(getRandomQuote());
        setColor(getRandomColour());
    };
    
    return (
        <>
            <div className="main" style={{width: 'max', height: '800px', backgroundColor: color}}>
                <div className="container">
                    <h1 style={{color: color}}>"{quote.quote}"</h1>
                    <div className="align-right">
                        <p style={{color: color}}>- {quote.author.length === 0 ? 'unknown author' : quote.author} -</p>
                        <button style={{backgroundColor: color}} onClick={handleClick}>New quote</button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default RandomQuote;