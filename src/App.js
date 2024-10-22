import React, { useState } from 'react';
import './App.css'; 
import Weather from './weather/Weather';

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
    <div className='appToDo'>
    <Weather/>
      <div className="fixed">

      <h2 style={{color:'black'}}>To-Do List</h2>
      <input
        type="text"
        value={currentTodo}
        onChange={e => setCurrentTodo(e.target.value)}
        placeholder="Enter a new task"
        className='input'
        
        />
      <button className='addMe' onClick={addTodo}>Add</button>
        </div>
     
        {todos.length!=0?"":<h1 className='addedText'>Added items will be visible here.</h1>}
      <ol className='todoItems'>
        {todos.map(todo => (
          <div id='todoText' key={todo.id}>
            <h2>{todo.text}</h2>
            {/* <h4 style={{color:'white',fontSize:'16px',paddingLeft:'8px'}}>{new Date(Date.now()).toLocaleString()}</h4> */}
            <div className="buttons">
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => editTodo(todo.id, prompt('Enter new text'))}>Edit</button>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
