import './App.css';
import { useState, createContext } from 'react';
import Display from './components/Display';
import Action from './components/Action';

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
      <h2>App</h2>
      <AppContext.Provider value={{count, setCount, name: "John"}}>
        <Display />
        <Action />
      </AppContext.Provider>
    </>
  )
}

export default App
