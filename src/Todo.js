import React from 'react';
import {
  Button,
} from 'reactstrap';

const Todo = (props) => {
  const { children, completed, toggle } = props;
  return (
    <div className="todo">
      <div className="todo-text">
        <span className={completed ? 'completed' : ''}>{children}</span>
      </div>
      <div className="todo-action">
        <Button color="link" onClick={toggle}>{completed ? "I won't do it again" : "Oops I did it again"}</Button>
      </div>
    </div>
  );
};

export default Todo;