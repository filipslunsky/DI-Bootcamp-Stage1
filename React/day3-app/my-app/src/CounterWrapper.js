const CounterWrapper = (props) => {
    console.log("CounterWrapper=>", props);
    
    return (
        <>
            Counts: {props.children}
        </>
    );
}
 
export default CounterWrapper;