import './App.css';
import { useState } from 'react';

function App() {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState();
  // const [text, setText] = useState('');
  // const [check, setCheck] = useState(false);
  
  const [inputs, setInputs] = useState({
    name: '',
    number: '',
    text: '',
    check: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleInputs = (e) => {
    const { name, value, type, checked } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
    <h2>My React Form</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="name" id="name" placeholder='name' onChange={(e) => handleInputs(e)}/>
      <br />
      <select name="number" id="selection" onChange={(e) => handleInputs(e)}>
        <option value={1}>one</option>
        <option value={2}>two</option>
        <option value={3}>three</option>
      </select>
      <br />
      <textarea name="text" id="text" onChange={(e) => handleInputs(e)} />
      <br />
      <input type="checkbox" name="yesno" onChange={(e) => handleInputs(e)} />
      <br />
      <input type="submit" value='Submit'/>
    </form>
    </>
  );
}

export default App;
