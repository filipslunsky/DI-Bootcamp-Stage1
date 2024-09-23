import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <>
      {/* Exercise 1 */}
      <Car name={carinfo.name} model={carinfo.model}/>
      <br />
      {/* Exercise 2 */}
      <Events />
      <br />
      {/* Exercise 3 */}
      <Phone />
      <br />
      {/* Exercise 4 */}
      <Color />
    </>
  );
}

export default App;
