import { useState } from 'react';
import './BuggyCounter.css'

const BuggyCounter = () => {
    const [count, setCount] = useState(0);

    if (count > 4) {
        throw new Error('I crashed!');
    };

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h2 onClick={handleClick}>{count}</h2>
        </>
    );
}
 
export default BuggyCounter;