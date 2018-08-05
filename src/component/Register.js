import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { registerToServer, changeRegisterState } from '../actions/index';
import { push } from 'connected-react-router';

class Register extends PureComponent {
  render() {
    let userName;
    let password1;
    let password2;
    return (
      <div>
        <div className="page-header">
          <h1>Register</h1>
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
            ref={pw => (password1 = pw)}
            className="form-control"
            placeholder="input password"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">
            password
          </span>
          <input
            type="password"
            ref={pw => (password2 = pw)}
            className="form-control"
            placeholder="input password again"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-default"
            onClick={() => {
              {
                let name = userName.value;
                let pswd1 = password1.value;
                let pswd2 = password2.value;
                console.log('name', name);
                console.log('p1', pswd1);
                console.log('p2', pswd2);
                if (name === '') {
                  this.props.changeRegisterState('username should not be null');
                  return;
                }
                if (pswd1 === '') {
                  this.props.changeRegisterState('password not be null');
                  return;
                }
                if (pswd1 !== pswd2) {
                  this.props.changeRegisterState('password should be same');
                  return;
                }
                this.props.registerToServer(userName.value, password1.value);
              }
            }}
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={() => {
              this.props.push('/');
            }}
          >
            Go To Log in
          </button>
        </div>
        <div>
          <span>{this.props.userState.registerState}</span>
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
  registerToServer: (userName, password) =>
    dispatch(registerToServer(userName, password)),
  push: path => dispatch(push(path)),
  changeRegisterState: state => dispatch(changeRegisterState(state))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
