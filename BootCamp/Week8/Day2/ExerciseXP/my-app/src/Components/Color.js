import { useState, useEffect } from "react";

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red');

    const changeColor = () => {
        setFavoriteColor('blue');
    };

    useEffect(() => {
        setFavoriteColor('yellow');
        alert('useEffect reached');
    }, []);

    return (
        <>
            <h1>My Favorite Color is {favoriteColor}</h1>
            <button onClick={changeColor}>Change color</button>
        </>
    );
}
 
export default Color;