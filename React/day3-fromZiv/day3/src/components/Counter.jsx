const Counter = ({ count, setCount }) => {
  //   console.log("Counter=>", props);
  //   const {count} = props
  return (
    <>
      <h2>My Counter</h2>
      Counts: {count}
      <button onClick={() => setCount((count) => count + 1)}> + </button>
    </>
  );
};
export default Counter;
