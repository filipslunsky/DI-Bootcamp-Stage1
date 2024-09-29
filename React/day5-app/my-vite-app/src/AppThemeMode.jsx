import './App.css';
import { useState, createContext } from 'react';
import Header from './components/Header';
import Main from './components/Main';

export const ModeContext = createContext();

function App() {
  const [mode, setMode] = useState('light');

  return (
    <>
      <ModeContext.Provider value={{mode, setMode}}>
        <Header />
        <Main />
      </ModeContext.Provider>
    </>
  )
}

export default App;
