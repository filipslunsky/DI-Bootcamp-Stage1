import './App.css';
import VoteField from './components/VoteField';
import { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ]);

  const handleVote = (index) => {
    const newLanguages = [...languages];
    console.log(newLanguages);
    newLanguages[index].votes += 1;
    setLanguages(newLanguages)
  };

  return (
    <div className='container'>
      <h1>Vote Your Language! </h1>
        {languages.map((language, index) => (
        <VoteField
          key={index}
          name={language.name}
          votes={language.votes}
          onVote={() => handleVote(index)}
        />
      ))}
    </div>

  );
}

export default App;
