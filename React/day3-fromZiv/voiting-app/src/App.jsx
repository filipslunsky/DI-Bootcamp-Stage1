import { useState } from "react";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const vote = (item) => {
    // const newLanguage = [...languages]
    // newLanguage[indx].votes++
    // console.log(languages);
    // setLanguages(newLanguage)
    item.votes++;
    setLanguages([...languages]);
  };

  return (
    <>
      <h2>Vote for me:</h2>
      {languages.map((item, indx) => {
        return (
          <div key={indx}>
            {item.name} {item.votes}
            <button onClick={() => vote(item)}>Vote!</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
