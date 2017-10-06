import React from 'react';
import { Link } from 'react-router-dom';
import TaskColumn from '../TaskColumn';

const HomePage = () => {
  return (
    <div>
      <h1>Homepage!</h1>  
      <Link to="/login">Login</Link>      
      <TaskColumn />
    </div>
  );
};

export default HomePage;