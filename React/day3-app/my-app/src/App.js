// import './App.css';
// import Counter from './components/Counter';
// import { useState } from 'react';
// import CounterButton from './components/CounterButton';
// import Parent from './components/Parent';
// import Child from './components/Child';
// import CounterWrapper from './CounterWrapper';
import CounterError from "./components/CounterError";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  // const [count, setCount] = useState(55);

  // const handlePlus = () => {
  //   setCount(count + 1)
  // };

  // const handleMinus = () => {
  //   setCount(count - 1)
  // };  

  return (
    <>
      {/* <Counter
        count={count}
        onCount={() => handlePlus()}
      />
      <CounterButton 
        onCount={() => handleMinus()}
      />
      <Parent auth='admin'>
        <Child />
      </Parent>

      <CounterWrapper>
        <h2>{count}</h2>
      </CounterWrapper> */}
      <ErrorBoundary>
        <CounterError />
      </ErrorBoundary>
      <ErrorBoundary>
        <CounterError />
      </ErrorBoundary>
    </>
  );
}

export default App;
