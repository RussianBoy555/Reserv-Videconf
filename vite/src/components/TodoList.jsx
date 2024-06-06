
import { TodoItem } from './TodoItem';

export const TodoList = (todo, colorMode ) => { 

  console.log(todo);

  return (
    <>
      <ul>
        {todo.length > 0? todo.map((todo) => (
          <TodoItem key={todo.id} colorMode={colorMode} todo={todo} /> 
        )) : <li>No hay tareas.</li>} 
      </ul>
    </>
  );
};

export default TodoList;





