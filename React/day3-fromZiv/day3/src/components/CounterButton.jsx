const CounterButton = ({setCount}) => {
  return (
    <>
      <button onClick={() => setCount((count) => count - 1)}> - </button>
    </>
  );
};
export default CounterButton;
