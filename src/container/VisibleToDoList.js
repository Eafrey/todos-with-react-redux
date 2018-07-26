import { connect } from 'react-redux';
import ToDoList from '../component/ToDoList';
import { clickToEdit, clickToDone } from '../actions/index';

const todos = state => ({
  todos: state.todos
});

// const edit = dispatch => ({
//   clickToEdit: id => dispatch(clickToEdit(id))
// });

const mapPropsToDispathc = dispatch => ({
  clickToDone: id => dispatch(clickToDone(id)),
  clickToEdit: id => dispatch(clickToEdit(id))
});

export default connect(
  todos,
  mapPropsToDispathc
)(ToDoList);
