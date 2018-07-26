import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Header extends PureComponent {
  constructor(props) {
    console.log('cons headers', props.headers);
    super(props);
  }

  render() {
    console.log('headers', this.props.headers);
    return (
      <div>
        <span>avator </span>
        <span>name </span>
        <span>gender</span>
        {/* <span>{this.props.header["avator"]}</span>
            <button>{this.props.header["name"]}</button>
            <button>{this.props.header["gender"]}</button> */}
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
