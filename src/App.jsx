import React, { useEffect, useState } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import ResetButton from './Components/ResetButton';
import './App.css'

function App() {
  const [todos, setTodos] = useState(localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[]);
  
 useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      text,
      completed: false,
      timestamp: Date.now(),
    };
    setTodos([newTodo, ...todos]);
  };

  const completeTodo = (timestamp) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.timestamp === timestamp) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    
    updatedTodos.sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>TODO APP</h1>
        <ResetButton resetTodos={resetTodos} />
        </div>      
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} />      
    </div>
  );
}

export default App;
