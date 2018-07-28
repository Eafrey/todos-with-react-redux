import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

const Detail = ({ todo, goBack }) => {
  const timeStrap = new Date(todo.id);
  const month = parseInt(timeStrap.getMonth(), 10) + 1;
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

  return (
    <div>
      <div className="page-header">
        <h3>todo info</h3>
      </div>
      <ul class="list-group">
        <li class="list-group-item list-group-item-info">id: {todo.id}</li>
        <li class="list-group-item list-group-item-info">
          content: {todo.content}
        </li>
        <li class="list-group-item list-group-item-info">
          complete status: {todo.complete.toString()}
        </li>
        <li class="list-group-item list-group-item-info">
          create time: {createTime}
        </li>
      </ul>
      <button className="btn btn-info" onClick={goBack}>
        goBack
      </button>
    </div>
  );
};

export default connect(
  (state, match) => {
    const id = parseInt(match.match.params.id, 10);
    return {
      todo: state.todos.find(todo => todo.id === id)
    };
  },
  { goBack }
)(Detail);
