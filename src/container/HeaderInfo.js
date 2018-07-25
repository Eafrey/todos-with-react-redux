import { connect } from 'react-redux';
import Header from '../component/Header';

const headers = state => ({
  headers: state.headers
});

export default connect(headers)(Header);
