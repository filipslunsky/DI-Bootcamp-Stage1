// Exercise 1
import { useState } from 'react';
import Garage from './Garage';

const Car = (props) => {
    const [ color, setColor ] = useState('blue');
    return (
        <>
        <h1>
            This car is {color} {props.name}, {props.model}.
        </h1>
        <Garage size={'small'}/>
        </>
    )
};

export default Car;