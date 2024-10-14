import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Section from './components/Section';
import List from './components/List';
import Counter from './components/Counter';

interface User {
  id: number;
  username: string;
};

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  return (
    <>
      <Heading title={'My title'} subtitle={'sub abc'} />
      <Section content={1234}>
        abcde
      </Section>
      <List items={["milk", "toast", "honey"]} />
      {/* <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>add</button> */}
      <Counter setCount={setCount}>
        <h2>Count is {count}</h2>
      </Counter>
    </>
  )
}

export default App;
