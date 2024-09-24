const CounterButton = (props) => {
    const handleClick = () => {
        props.onCount();
    };
    
    return (
        <>
            <button onClick={handleClick}> - </button>
        </>
    );
}
 
export default CounterButton;