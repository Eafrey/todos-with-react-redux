import React from 'react';
import PropTypes from 'prop-types';

let input;

const Todo = ({ todo, onClick }) => (
  <li>
    <span
      ref={node => (input = node)}
      contentEditable="true"
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
      onClick={onClick}
      // onChange={() => {
      //   this.props.dispath(clickToEdit(input));
      // }}
    >
      {todo.content}
    </span>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Todo;
