const Counter = (props) => {
    const handleClick = () => {
        props.onCount();
    };

    return (
        <>
            <h2>My Counter</h2>
            <p>Counts: {props.count}</p>
            <button onClick={handleClick}> + </button>
        </>
    );
}
 
export default Counter;
