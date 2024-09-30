import './App.css';
import Counter from './components/Counter';
import  { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>State Counter</h2>
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>
      {count}
      <button onClick={() => setCount((prev) => prev - 1)}> - </button>
      <h2>Redux Counter</h2>
      <Counter />
    </>
  )
}

export default App
