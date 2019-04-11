import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todos: []
    };
  }

  updateNewTodoText(e) {
    this.setState({ newTodo: e.target.value })
  }

  addTodo() {
    const newTodos = this.state.todos;
    newTodos.push(this.state.newTodo);
    this.setState({
      todos: newTodos,
      newTodo: '',
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h1>Todont</h1>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="4">
              <p><Input type="text" value={this.state.newTodo} onChange={(e) => this.updateNewTodoText(e)} placeholder="Thing to not do"/></p>
              <p><Button color="primary" onClick={() => this.addTodo()}>Add Todont</Button></p>
            </Col>
            <Col sm="12" md="8">
              <ul>{this.state.todos.map((todo, i) => <li key={i}>{todo}</li>)}</ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
