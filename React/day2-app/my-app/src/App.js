import Example from './components/Example';
import ExampleClass from './components/ExampleClass';
import './App.css';
import ExampleUnmount from './components/ExampleUnmount';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [unmount, setUnmount] = useState(false);
  return (
    <>
      {/* <Example test={1}/> */}
      {/* <ExampleClass test={2} /> */}
      {/* <button onClick={() => setUnmount(!unmount)}>
        {unmount ? "Mount" : "UnMount"}
      </button>
      {unmount ? null : <ExampleUnmount />} */}
      <Counter />
    </>
  );
}

export default App;
