import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class Login extends Component {
  state = {}
  render() {
    return (
      <Form>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default Login;