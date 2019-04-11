import React from 'react';
import {
  Button,
} from 'reactstrap';

const Todo = (props) => {
  const { children, onDismiss } = props;
  return (
    <div className="todo">
      <div className="todo-text">
        <span>{children}</span>
      </div>
      <div className="todo-action">
        <Button color="link" onClick={onDismiss}>Oops I did it again</Button>
      </div>
    </div>
  );
};

export default Todo;