import React from 'react';

const TodoItem = ( todo, onDelete ) => {
  return (
    <li style={{ textDecoration: todo.completed? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
};

export default TodoItem;