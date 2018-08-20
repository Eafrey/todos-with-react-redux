import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loginToServer, setUserName } from '../actions/index';
import { push } from 'connected-react-router';

class Login extends PureComponent {
  render() {
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
          <button
            type="button"
            className="btn btn-default"
            onClick={() => {
              this.props.push(`/register`);
            }}
          >
            no account? go register
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={() => {
              this.props.loginToServer(userName.value, password.value);
              this.props.setUserName(userName.value);
              // this.props.push(`/todos`);
              // this.props.setUserName(userName.value);
            }}
          >
            log in
          </button>
        </div>
        <div>
          <span>{this.props.userState.logState}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userState: state.userState
  };
};

const mapDispatchToProps = dispatch => ({
  loginToServer: (userName, password) =>
    dispatch(loginToServer(userName, password)),
  push: path => dispatch(push(path)),
  setUserName: name => dispatch(setUserName(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
