import React from 'react';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';

const TaskColumn = () => (
  <div className="container">
    <TaskHeader />
    <TaskList />
  </div>
)

export default TaskColumn;