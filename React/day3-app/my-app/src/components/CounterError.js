import { useState } from 'react';

const CounterError = (props) => {
    const [count, setCount] = useState(0);

    if (count > 5) {
        throw new Error('Ooops....!!!!')
    }

    return (
        <>
            <p>Counts: {count}</p>
            <button onClick={() => setCount(count + 1)}> + </button>
        </>
    );
}
 
export default CounterError;
