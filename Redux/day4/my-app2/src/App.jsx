import { useState, useCallback, useMemo } from 'react';
import ToDo from './ToDo';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // const addTask = () => {
  //   setTodos(todos => [...todos, 'newtask']);
  // };

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 10000000; i++) {
      num++
    }
    return num;
  };

  // const calc = expensiveCalculation(0)
  // console.log(calc);

  const calc = useMemo(() => {
    const calc = expensiveCalculation(0);
    console.log(calc);
    return calc;
  }, []);
  

  const addTask = useCallback(() => {
    setTodos(todos => [...todos, 'newtask']);
  }, []);

  return (
    <>      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <ToDo todos={todos} addTask={addTask}/>
    </>
  )
}

export default App;

