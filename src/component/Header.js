import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Header extends PureComponent {
  render() {
    //   const userInfos = this.props.getUserInfo("");
    // console.log('render userInfos', userInfos);

    return (
      <div>
        {/* <span>avator </span>
        <span>name </span>
        <span>gender</span> */}
        <span>{this.props.headers['avator']}</span>
        <span>{this.props.headers['name']}</span>
        <span>{this.props.headers['gender']}</span>
      </div>
    );
  }
}

// const Header = ({ headers }) => (
//     <div>
//         <span>{headers.avator}</span>
//         <span>{headers.name}</span>
//         <span>{headers.gender}</span>
//     </div>
// )

Header.propTypes = {
  headers: PropTypes.shape({
    avator: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  }).isRequired
};

export default Header;
