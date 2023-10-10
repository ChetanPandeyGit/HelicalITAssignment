import React from 'react';

function TodoItem({ todo, completeTodo }) {
  const handleComplete = () => {
    completeTodo(todo.timestamp);
  };

  return (
    <div
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={handleComplete}
    >
      <span className={todo.completed ? 'completed-todo' : ''} >
        {todo.text}
      </span>
    </div>
  );
}

export default TodoItem;
