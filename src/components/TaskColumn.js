import React from 'react';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';
import { Grid } from 'semantic-ui-react';

const TaskColumn = () => (
  <Grid.Column>
    <TaskHeader />
    <TaskList />
  </Grid.Column>
)

export default TaskColumn;