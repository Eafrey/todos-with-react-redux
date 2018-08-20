import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Header extends PureComponent {
  render() {
    console.log('headers', this.props.headers);
    return (
      <div>
        <div className="page-header">
          <h1>{this.props.headers.avator}</h1>
          <h2>{this.props.headers.name}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headers: state.headers
});

export default connect(mapStateToProps)(Header);
