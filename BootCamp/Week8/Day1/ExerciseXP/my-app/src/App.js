// import logo from './logo.svg';
import './App.css';
// import UserFavoriteAnimals from './components/UserFavoriteAnimals';
import Exercise from './components/Exercise3';

function App() {
  // // Exercise 1
  // const myelement = <h1>I Love JSX!</h1>;
  // const sum = 5 + 5;

  // // Exercise 2
  // const user = {
  //   firstName: 'Bob',
  //   lastName: 'Dylan',
  //   favAnimals : ['Horse','Turtle','Elephant','Monkey']
  // };
  return (
    // Exercise 1
    // <>
    //   <p>Hello World</p>
    //   {myelement}
    //   <p>"React is {sum} times better with JSX"</p>
    // </>

    // // Exercise 2
    // <>
    // <h3>{user.firstName}</h3>
    // <h3>{user.lastName}</h3>
    // <UserFavoriteAnimals animals={user.favAnimals}/>
    // </>

    // Exercise 3
    <>
    <Exercise />
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
