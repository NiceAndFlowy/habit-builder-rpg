import React from 'react';
import { render } from 'react-dom';
import { BrowserHistory, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App'

render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
