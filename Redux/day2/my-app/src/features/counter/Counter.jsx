import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByNumber, incrementByTwoNumbers, incrementWithPrepare } from './counterSlice';
import { useRef } from 'react';

const Counter = (props) => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counterReducer.count);
    
    const numRef = useRef();
    const numOneRef = useRef();
    const numTwoRef = useRef();

    const addNumber = () => {
        const number = numRef.current.value;
        dispatch(incrementByNumber(Number(number)));
    };

    const addTwoNumbers = () => {
        // const twoNumbers = {
        //     numOne: Number(numOneRef.current.value),
        //     numTwo: Number(numTwoRef.current.value),
        // };
        const numOne = Number(numOneRef.current.value);
        const numTwo = Number(numTwoRef.current.value);
        dispatch(incrementWithPrepare(numOne, numTwo));
        
    };

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}> + </button>
            <button onClick={() => dispatch(decrement())}> - </button>
            <button onClick={() => dispatch(reset())}> reset </button>
            <div>
                <h2>Increment by Number</h2>
                <input ref={numRef} type="number" placeholder='number'/>
                <button onClick={() => addNumber()}>add number</button>
            </div>
            <div>
                <h2>Increment by Two Numbers</h2>
                <input ref={numOneRef} type="number" placeholder='number'/>
                <input ref={numTwoRef} type="number" placeholder='number'/>
                <button onClick={() => addTwoNumbers()}>add two numbers</button>
            </div>
        </>
    );
}
 
export default Counter;