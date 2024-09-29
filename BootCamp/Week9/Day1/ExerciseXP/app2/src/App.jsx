import React, { useRef } from "react";
import "./App.css";

function CharacterCounter() {
  const inputRef = useRef(null);
  const countRef = useRef(null);

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    countRef.current.textContent = `Character Count: ${textLength}`;
    
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."></textarea>
      <p ref={countRef}>Character Count: 0</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;
