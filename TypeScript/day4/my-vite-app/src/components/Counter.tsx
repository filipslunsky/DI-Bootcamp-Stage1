import { ReactElement, ReactNode } from "react";
import { useState } from "react";

type CounterProps = {
    children: ReactElement;
    setCount: React.Dispatch<React.SetStateAction<number>>
};

const Counter = ({ children, setCount }: CounterProps): ReactNode => {

    return (
        <>
        <h2>Counter Component</h2>
        {children}
        <button onClick={() => setCount(count => count + 1)}> + </button>
        <button onClick={() => setCount(count => count - 1)}> - </button>
       
        </>
    );
}
 
export default Counter;