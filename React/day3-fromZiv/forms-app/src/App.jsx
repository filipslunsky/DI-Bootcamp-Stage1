import { useState } from "react";

import "./App.css";

function App() {
  // const [name, setName] = useState("");
  // const [num, setNum] = useState("");
  // const [text, setText] = useState("");
  // const [yesno, setYesNo] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    num: "",
    text: "",
    yesno: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, num, text, yesno);
    console.log(inputs);
  };

  const handleInputs = (e) => {
    // console.log(e.target.name, e.target.type);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setInputs({ ...inputs, [e.target.name]: value });
  };

  return (
    <>
      <h2>Forms in React</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name='name'
          placeholder='Name'
          onChange={(e) => handleInputs(e)}
        />
        <br />
        <select name='num' onChange={(e) => handleInputs(e)}>
          <option value={-1}>Pleas select a number...</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <br />
        <textarea name='text' onChange={(e) => handleInputs(e)} />
        <br />
        <input type='checkbox' name='yesno' onChange={(e) => handleInputs(e)} />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
}

export default App;

/**
 * Create a form with:
 * 1.input text
 * 2. input submit
 * 3. input select with options
 * 4. textarea
 * 5. checkbox
 * Console log the input's values when submitting the form
 */
