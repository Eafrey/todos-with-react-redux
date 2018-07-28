import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

const Detail = ({ todo, goBack }) => (
  <div>
    <div>{todo.id}</div>
    <div>{todo.content}</div>
    <div>{todo.complete.toString()}</div>
    <button onClick={goBack}>goBack</button>
  </div>
);

export default connect(
  (state, match) => {
    const id = parseInt(match.match.params.id);
    return {
      todo: state.todos.find(todo => todo.id === id)
    };
  },
  { goBack }
)(Detail);
