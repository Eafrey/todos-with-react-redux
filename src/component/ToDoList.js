import React from 'react';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { clickToEdit } from '../actions';

class ToDoList extends PureComponent {
  constructor(props) {
    console.log('todos', props.todos);
    super(props);
  }

  render() {
    let input;
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, index) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                // onChange={edit}
                onClick={() => this.props.clickToDone(todo.id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

// const ToDoList = ({ todos,  clickToDone }) => (
//   <ul>
//     {todos.map(todo =>
//       <Todo
//         key={todo.id}
//         todo = {todo}
//         // onChange={edit}
//         onClick={() => clickToDone(todo.id)}
//       />
//     )}
//   </ul>
// )

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  clickToDone: PropTypes.func.isRequired
};

export default ToDoList;
