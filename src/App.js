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
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    });
  }

  renderTodos() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    } 
    return <ul>{this.state.todos.map(({ text, key }) => <li key={key}>{text}</li>)}</ul>;
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
              {this.renderTodos()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
