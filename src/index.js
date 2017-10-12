import React from 'react';
import { render } from 'react-dom';
import { BrowserHistory, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

render(
  <BrowserRouter>
    <Provider store={store}>
      <App /> 
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
