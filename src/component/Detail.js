import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

const Detail = ({ todo, goBack }) => {
  const timeStrap = new Date(todo.date);
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
      <ul className="list-group">
        <li className="list-group-item list-group-item-info">id: {todo.id}</li>
        <li className="list-group-item list-group-item-info">
          content: {todo.content}
        </li>
        <li className="list-group-item list-group-item-info">
          complete status: {todo.complete.toString()}
        </li>
        <li className="list-group-item list-group-item-info">
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
