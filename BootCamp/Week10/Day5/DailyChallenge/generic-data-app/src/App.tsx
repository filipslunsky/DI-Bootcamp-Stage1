import './App.css';
import React from 'react';
import DataFetcher from './components/DataFetcher';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Random Vegetarian Dessert Recipe</h1>
      <DataFetcher />
    </div>
  );
};

export default App;
