import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Signup from '../Signup';
import { signup } from '../../actions/userActions';

class SignupPage extends Component {
  onSubmit = data =>
    this.props.signup(data).then(() => this.props.history.push('/main'));

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <Signup submit={this.onSubmit} />
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);
