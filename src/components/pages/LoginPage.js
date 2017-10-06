import React from 'react';
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage!</h1>  
      <Link to="/login">Login</Link>      
    </div>
  );
};

export default LoginPage;