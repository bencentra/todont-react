import { connect } from 'react-redux';
import { toggleTodo } from './actions';
import TodoList from './TodoList';

const mapStateToProps = state => ({
  todos: state.todos.filter((todo) => state.showCompleted || !todo.completed),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: key => dispatch(toggleTodo(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);