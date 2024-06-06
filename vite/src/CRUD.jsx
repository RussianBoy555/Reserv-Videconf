/*
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { FaMoon, FaSun } from 'react-icons/fa';

function Todo2() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark' : 'light');
  };

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (indexToDelete) => {
    const newTodos = todos.filter((_, index) => index!== indexToDelete);
    setTodos(newTodos);
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        {theme === 'light'? <FaMoon /> : <FaSun />}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </ul>
      <input type="text" onChange={(e) => addTodo(e.target.value)} placeholder="Añadir tarea" />
    </div>
  );
}

export default Todo2;


import Todo2 from './CRUD'
<Route path='/Todo' element = {<Todo2/>}/>
*/