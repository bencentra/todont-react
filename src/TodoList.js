import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const { todos, toggleTodo } = props;
  return (
    <div className="todos">
      {todos.map(({ key, text, completed }) => 
        <Todo key={key} completed={completed} toggle={() => toggleTodo(key)}>{text}</Todo>)}
    </div>
  );
};

export default TodoList;