import React, { useState } from 'react';
import './App.css'; 

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');

  const addTodo = () => {
    if (currentTodo !== '') {
      const newTodo = {
        id: Math.random(),
        text: currentTodo
      };
      setTodos([...todos, newTodo]);
      setCurrentTodo('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={currentTodo}
        onChange={e => setCurrentTodo(e.target.value)}
        placeholder="Enter a new task"
        
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li id='todoText' key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => editTodo(todo.id, prompt('Enter new text'))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
