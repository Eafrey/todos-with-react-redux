import React from 'react';
import { connect } from 'react-redux';
import { getToDosFromServer } from '../actions';

const GetServerList = ({ dispatch }) => {
  return (
    <div>
      <button
        className="btn btn-default"
        onClick={() => {
          fetch('/api/todos')
            .then(response => {
              console.log('respones', response);
              return response.json();
            })
            .then(json => dispatch(getToDosFromServer(json)));
        }}
      >
        Get Todos From Server
      </button>
    </div>
  );
};

export default connect()(GetServerList);
