import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends PureComponent {
  render() {
    return (
      <div className="page-header">
        <h1>
          {this.props.headers['avator']}
          <small>name: {this.props.headers['name']}</small>
        </h1>
      </div>
    );
  }
}

Header.propTypes = {
  headers: PropTypes.shape({
    avator: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  }).isRequired
};

const headers = state => ({
  headers: state.headers
});

export default connect(headers)(Header);
