// Exercise 2
import { useState } from 'react';

const Events = (props) => {
    const [inputValue, setInputValue] = useState('');
    const clickMe = () => {
        alert('I was clicked');
    };
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            alert(`The ${e.key.toUpperCase()} was pressed, your input: ${inputValue}`);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleClick = () => {
        setIsToggleOn(!isToggleOn);
        console.log(isToggleOn);
    };

    return (
        <>
            <button onClick={clickMe}>Click Me</button>
            <br />
            <input onKeyDown={handleKeyDown} onChange={handleChange} type="text" placeholder="Press the ENTER key!" />
            <br />
            <button onClick={handleClick}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </>
    )
};

export default Events;