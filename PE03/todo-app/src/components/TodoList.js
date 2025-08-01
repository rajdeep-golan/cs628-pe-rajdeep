import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;