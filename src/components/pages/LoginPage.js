import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Login from '../Login';


class LoginPage extends Component {
  onSubmit = () => {
    console.log('submitting data');
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Login submit={this.onSubmit} />
      </div>
    );
  }
}

export default LoginPage;