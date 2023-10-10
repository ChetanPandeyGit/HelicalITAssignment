import React from 'react';
import TodoItem from './TodoItem'; 

function TodoList({ todos, completeTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.timestamp}
          todo={todo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
