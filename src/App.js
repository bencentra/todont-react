import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import TodoListContainer from './TodoListContainer';
import AddTodo from './AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm="12" md="4">
            <h1>Todont</h1>
            <AddTodo/>
          </Col>
          <Col sm="12" md="8">
            <h3>Don't...</h3>
            <TodoListContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
} 

export default App;