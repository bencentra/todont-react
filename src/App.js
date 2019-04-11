import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  Button,
} from 'reactstrap';
import Todo from './Todo';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      newTodo: '',
      todos: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        todos: JSON.parse(localStorage.getItem('todos') || '[]'),
        loading: false,
      });
    }, 500);
  }

  handleEnter(e) {
    if (e.key === 'Enter') this.addTodo();
  }

  updateNewTodoText(e) {
    this.setState({ newTodo: e.target.value });
  }

  addTodo() {
    const newTodos = this.state.todos;
    newTodos.push({
      text: this.state.newTodo,
      key: Date.now(),
    });
    this.setState({
      todos: newTodos,
      newTodo: '',
    }, () => this._updateLocalStorage());
  }

  removeTodo(keyToRemove) {
    const newTodos = this.state.todos.filter(({ key }) => {
      return key !== keyToRemove;
    });
    this.setState({
      todos: newTodos,
    }, () => this._updateLocalStorage());
  }

  _updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  renderTodos() {
    if (this.state.loading) {
      return <p className="message">Loading...</p>;
    } else if (this.state.todos.length === 0) {
      return <p className="message">Nothing to not do. <em>You can do anything!</em></p>
    }
    return this.state.todos.map(({ text, key }) => <Todo key={key} onDismiss={() => this.removeTodo(key)}>{text}</Todo>);
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm="12" md="4">
              <h1>Todont</h1>
              <p><Input type="text" value={this.state.newTodo} onKeyPress={(e) => this.handleEnter(e)} onChange={(e) => this.updateNewTodoText(e)} placeholder="Thing to not do"/></p>
              <p><Button color="primary" onClick={() => this.addTodo()}>Add Todont</Button></p>
            </Col>
            <Col sm="12" md="8">
              <h3>Don't...</h3>
              <div className="todos">{this.renderTodos()}</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
