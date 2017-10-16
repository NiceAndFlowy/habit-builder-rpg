import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constants/actionTypes';
import api from '../utils/apiUtils' ;

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

// Thunk 
export const login = credentials => dispatch => 
  api.user.login(credentials).then(user => {
    localStorage.habitJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => { 
    localStorage.removeItem('habitJWT');
    dispatch(userLoggedOut());
  };