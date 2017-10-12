import { USER_LOGGED_IN } from '../constants/actionTypes';
import api from '../utils/apiUtils' ;

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

// Thunk 
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));