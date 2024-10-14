import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import UsersList from './components/UsersList';

function App() {
  

  return (
    <>
      {/* Exercise 2 */}
      <Greeting name={'Jane Roe'} />
      {/* Exercise 3 */}
      <Counter />
      {/* Exercise 4 */}
      <UserCard name={'John Doe'} age={34} />
      {/* Exercise 5 */}
      <UsersList />
    </>
  )
}

export default App;
