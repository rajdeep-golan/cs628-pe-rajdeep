import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

  // Event handler for input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Event handler for adding a new todo 
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue } 
      ]);
      setInputValue(''); // Clear the input field after adding
    }
  };

  // Event handler for deleting a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>My ToDo List</h1>
      <div className="todo-input-section">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        /> 
        <button onClick={handleAddTodo}>Add Task</button> 
      </div>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;