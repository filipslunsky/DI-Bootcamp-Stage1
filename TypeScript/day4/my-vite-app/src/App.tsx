import { useState,
  useEffect,
  useRef,
  useMemo,
  // ChangeEvent,
  ChangeEventHandler,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  // useContext,
  createContext
 } from 'react';
import './App.css';
import Heading from './components/Heading';
import Section from './components/Section';
import List from './components/List';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';

type AuthContextT = {
  token: string;
  userid: number;
};

export const AppContext = createContext<AuthContextT | null>(null);

// interface User {
//   id: number;
//   username: string;
// };

function App() {
  const [count, setCount] = useState<number>(0);
  // const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  // const numRef = useRef<number>(0);

  useEffect(() => {
    return (): void => console.log('unmounting');
  }, [count]);

  const heavyTask = (): number => {
    return 100;
  };

  const result = useMemo<number>(() => heavyTask(), []);
  console.log(result);

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {
    setCount(count => count + 2)
    console.log(e);
  }, []);


  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
      console.log(e.target.value);
    }
  };

  return (
    <>
    <input type="text" placeholder='write something...' ref={inputRef} onChange={handleChange} />
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
      <button onClick={addTwo}>Add2 {count}</button>
      <h3>Counter Reducer</h3>
      <CounterReducer />
    </>
  )
}

export default App;
