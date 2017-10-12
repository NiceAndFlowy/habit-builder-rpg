import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../Login';
import { login } from '../../actions/authActions';

class LoginPage extends Component {
  onSubmit = (data) => 
    this.props.login(data).then(() => this.props.history.push('/'));

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Login submit={this.onSubmit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
}

export default connect(null, { login })(LoginPage);