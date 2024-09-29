import React, { useReducer, useState, useEffect, useRef } from "react";
import './App.css';

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.text, isEditing: false }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text, isEditing: false } : todo
      );
    case "TOGGLE_EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isEditing: !todo.isEditing } : todo
      );
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [editText, setEditText] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  const searchRef = useRef("");

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleToggleEditTodo = (id, currentText) => {
    setEditText(currentText);
    dispatch({ type: "TOGGLE_EDIT_TODO", id });
  };

  const handleSaveEditTodo = (id) => {
    if (editText.trim() === "") return;
    dispatch({ type: "EDIT_TODO", id, text: editText });
    setEditText("");
  };

  const handleSearch = () => {
    const searchText = searchRef.current.value.toLowerCase();
    const filtered = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchText)
    );
    setFilteredTodos(filtered);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Search for a todo"
        ref={searchRef}
        onChange={handleSearch}
      />
      <br />
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <br />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSaveEditTodo(todo.id)}>Save</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => handleToggleEditTodo(todo.id, todo.text)}>
                  Edit
                </button>
                <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
