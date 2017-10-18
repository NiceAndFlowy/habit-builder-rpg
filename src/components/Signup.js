import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import InlineError from './messages/InlineError';

class Signup extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  // check errors (client) => submit form => check errors again (server)
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(error =>
          this.setState({ errors: error.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = 'Cannot be blank';
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Email</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={this.onChange}
          />
        </Form.Field>
        {errors.password && <InlineError text={errors.password} />}
        <Button primary>Signup</Button>
      </Form>
    );
  }
}

Signup.propTypes = {
  submit: PropTypes.func.isRequired
};

export default Signup;
