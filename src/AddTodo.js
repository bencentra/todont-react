import React, { Component, Fragment } from 'react';
import {
  Input,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from './actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      showCompleted: false,
    };
  }

  handleEnter(e) {
    if (e.key === 'Enter') this.addTodo();
  }

  updateNewTodoText(e) {
    this.setState({ newTodo: e.target.value });
  }

  addTodo() {
    this.props.dispatch(addTodo(this.state.newTodo.trim()));
    this.setState({ newTodo: '' });
  }

  toggleCompleted() {
    this.setState({ showCompleted: !this.state.showCompleted }, () => {
      this.props.dispatch(toggleCompleted());
    });
  }

  render() {
    return (
      <Fragment>
        <p><Input type="text" value={this.state.newTodo} onKeyPress={(e) => this.handleEnter(e)} onChange={(e) => this.updateNewTodoText(e)} placeholder="Thing to not do"/></p>
        <p>
          <Button color="primary" onClick={() => this.addTodo()}>Add Todont</Button>
          <Button color="secondary" onClick={() => this.toggleCompleted()}>
            {this.state.showCompleted ? "Hide Completed" : "Show Completed"}
          </Button>
        </p>
      </Fragment>
    );
  }
}

export default connect()(AddTodo);