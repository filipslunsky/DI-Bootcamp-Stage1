import { useState, useRef, ReactNode, ChangeEventHandler } from "react";
import List from "./List";

type Todo = {
    id: number;
    text: string;
};

const TodoApp = (): ReactNode => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (): void => {
        if (inputRef.current) {
        }
      };

      const addTodo = (): void => {
        if (!inputRef.current) {
            setTodos(todos);
        } else {
            const newTodo: Todo = {
                id: todos.length + 1,
                text: inputRef.current.value
            }
            setTodos([...todos, newTodo])
            inputRef.current.value = '';
        }
      };

    return (
        <>
            <h2>ToDo List</h2>
            <input type="text" placeholder="add a new TODO" ref={inputRef} onChange={handleChange} />
            <button onClick={addTodo}> add </button>
            <List
            items={todos}
            renderItem={(todo) => todo.text}
            />
        </>
    );
}
 
export default TodoApp;