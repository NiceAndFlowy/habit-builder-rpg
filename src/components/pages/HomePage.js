import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import TaskColumn from '../TaskColumn';
import * as actions from '../../actions/authActions';

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>Homepage!</h1>
    {isAuthenticated ? (
      <button onClick={logout}>Logout</button>
    ) : (
      <Link to="/login">Login</Link>
    )}
    <Grid stackable columns={4}>
      <TaskColumn />
      <TaskColumn />
      <TaskColumn />
      <TaskColumn />
    </Grid>
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
