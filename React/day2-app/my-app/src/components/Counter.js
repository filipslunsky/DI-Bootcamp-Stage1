import { useState, useEffect } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    };

    const deduct = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        if (count === 10 || count === -10) {setCount(0)};
    }, [count]);

    return (
        <>
        <button onClick={add}> + </button>
        {count}
        <button onClick={deduct}> - </button>
        </>
    )
};

export default Counter;