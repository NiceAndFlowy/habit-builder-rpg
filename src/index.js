import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserHistory, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import rootReducer from './reducers/index';
import { userLoggedIn } from './actions/authActions';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.habitJWT) {
  const user = { token: localStorage.habitJWT };
  store.dispatch(userLoggedIn(user));
}

render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
