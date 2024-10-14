import { useState, ReactNode } from "react";

const Counter = (): ReactNode => {
    const [count, setCount] = useState<number>(0);

    const increment = (): void => {
        setCount(count + 1);
    };

    const decrement = (): void => {
        setCount(count - 1);
    };

    return (
        <>
        <button onClick={increment}> + </button>
        <h2>{count}</h2>
        <button onClick={decrement}> - </button>
        </>
    );
}
 
export default Counter;