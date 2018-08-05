import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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

export default Header;
