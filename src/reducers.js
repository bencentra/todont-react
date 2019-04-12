import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_COMPLETED,
} from './actions';

const initialState = {
  todos: [],
  showCompleted: false,
};

const makeNewState = (state, newState) => Object.assign({}, state, newState);

const makeTodo = ({ text, key }) => ({ text, key, completed: false });

const addTodo = (todos, action) => {
  const newTodos = todos.slice();
  newTodos.push(makeTodo(action));
  return newTodos;
};

const toggleTodo = (todos, { key }) => {
  return todos.map((todo) => {
    if (todo.key === key) {
      return makeNewState(todo, { completed: !todo.completed });
    }
    return todo;
  });
};

function todos(state = initialState.todos, action) {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case TOGGLE_TODO:
      return toggleTodo(state, action);
    default:
      return state;
  }
}

function showCompleted(state = initialState.showCompleted, action) {
  switch (action.type) {
    case TOGGLE_COMPLETED:
      return !state;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos, 
  showCompleted,
});

export default todoApp;