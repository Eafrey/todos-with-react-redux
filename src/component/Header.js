import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Header extends PureComponent {
  render() {
    return (
      <div>
        <div className="page-header">
          {/* <h1>{this.props.headers.name}</h1> */}
          {/* <h2>{this.props.headers["name"]}</h2> */}
        </div>
      </div>
    );
  }
}

const headers = state => ({
  headers: state.headers
});

export default connect(headers)(Header);
