import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends PureComponent {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>{this.props.headers['name']}</h1>
          {/* <h2>{this.props.headers["name"]}</h2> */}
        </div>
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
