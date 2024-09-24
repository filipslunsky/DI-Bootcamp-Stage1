// import { useState } from "react";
// import Counter from "./components/Counter";
// import CounterButton from "./components/CounterButton";
import Parent from "./components/Parent";
import Child from "./components/Child";
// import CounterWrapper from "./components/CounterWrapper";
import CounterError from "./components/CounterError";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  // const [count, setCount] = useState(55);

  return (
    <>
      {/* <Counter count={count} setCount={setCount} /> */}
      {/* <CounterButton setCount={setCount}/> */}

      <Parent auth='admin'>
        <Child />
      </Parent>

      {/* <CounterWrapper>{count}</CounterWrapper> */}
      <ErrorBoundary fallback="Sorry... continue working">
        <CounterError />
      </ErrorBoundary>
      <ErrorBoundary fallback="nothing happened"><CounterError /></ErrorBoundary>
      
    </>
  );
}

export default App;
