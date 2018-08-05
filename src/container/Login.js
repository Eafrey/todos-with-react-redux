import React from 'react';
import { connect } from 'react-redux';

const Login = () => {
  let userName;
  let password;
  return (
    <div>
      <div className="page-header">
        <h1>Log In</h1>
      </div>
      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">
          user name
        </span>
        <input
          type="text"
          ref={un => (userName = un)}
          className="form-control"
          placeholder="input your user name"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">
          password
        </span>
        <input
          type="password"
          ref={pw => (password = pw)}
          className="form-control"
          placeholder="input password"
          aria-describedby="basic-addon1"
        />
      </div>
      <div>
        <button type="button" className="btn btn-default">
          register
        </button>
        <button type="button" className="btn btn-default">
          log in
        </button>
      </div>
    </div>
  );
};

export default connect()(Login);
