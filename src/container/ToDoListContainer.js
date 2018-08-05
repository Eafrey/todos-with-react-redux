import { connect } from 'react-redux';
import ToDoList from '../component/ToDoList';
import {
  clickToEdit,
  clickToDone,
  changeEditStatus,
  deleteTodo,
  deleteTodoInServer
} from '../actions/index';
import { push } from 'connected-react-router';

const todos = state => {
  return {
    todos: state.todos.filter(item => item.visible === true)
  };
};

// const edit = dispatch => ({
//   clickToEdit: id => dispatch(clickToEdit(id))
// });

const mapDispatchToProps = dispatch => ({
  clickToDone: id => dispatch(clickToDone(id)),
  clickToEdit: (id, text) => dispatch(clickToEdit(id, text)),
  changeEditStatus: id => dispatch(changeEditStatus(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  push: id => dispatch(push(id)),
  deleteTodoInServer: id => dispatch(deleteTodoInServer(id))
});

export default connect(
  todos,
  mapDispatchToProps
)(ToDoList);
