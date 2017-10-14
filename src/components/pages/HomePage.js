import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import TaskColumn from '../TaskColumn';

const HomePage = () => 
  (
    <div>
      <h1>Homepage!</h1>
      <Link to="/login">Login</Link>
      <Grid stackable columns={4}>
        <TaskColumn />
        <TaskColumn />
        <TaskColumn />
        <TaskColumn />
      </Grid>
    </div>
  );


export default HomePage;