import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Todo = ({
  todo,
  clickToDone,
  clickToEdit,
  changeEditStatus,
  deleteTodo
}) => {
  let input;
  const timeStrap = new Date(todo.id);
  const month = parseInt(timeStrap.getMonth()) + 1;
  const createTime =
    timeStrap.getFullYear() +
    '-' +
    month +
    '-' +
    timeStrap.getDate() +
    ' ' +
    timeStrap.getHours() +
    ':' +
    timeStrap.getMinutes() +
    ':' +
    timeStrap.getSeconds();

  const togo =
    '/' +
    'id:' +
    todo.id +
    ',   content:' +
    todo.content +
    ',   create time:' +
    createTime +
    ',   completeStatus:' +
    todo.complete;

  return (
    <div className="row">
      <div className="input-group">
        <span className="input-group-addon">
          <input type="checkbox" onClick={() => clickToDone(todo.id)} />
        </span>

        <span className="input-group-addon">
          <NavLink
            to={togo}
            activeStyle={{
              textDecoration: 'none',
              color: 'black'
            }}
          >
            detail
          </NavLink>
        </span>

        <input
          type="text"
          className="form-control"
          ref={node => (input = node)}
          defaultValue={todo.content}
          readOnly={todo.readOnly}
          style={
            todo.complete === true ? { textDecoration: 'line-through' } : {}
          }
          onDoubleClick={() => changeEditStatus(todo.id)}
          onBlur={() => {
            clickToEdit(todo.id, input.value);
            changeEditStatus(todo.id);
          }}
        />

        <span className="input-group-addon">
          <span>{'create time:' + createTime}</span>
        </span>

        <span className="input-group-btn">
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.id)}
          >
            X
          </button>
        </span>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  clickToDone: PropTypes.func.isRequired,
  clickToEdit: PropTypes.func.isRequired,
  changeEditStatus: PropTypes.func.isRequired
};

export default Todo;
