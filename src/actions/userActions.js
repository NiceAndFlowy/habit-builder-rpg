// import USER_SIGNED_UP from '../constants/actionTypes';
import api from '../utils/apiUtils';
import { userLoggedIn } from './authActions';
/*
export const userSignedUp = user => ({
  type: USER_SIGNED_UP,
  user
});
*/
// login after signup success
export const signup = signupData => dispatch =>
  api.user.signup(signupData).then(user => {
    localStorage.habitJWT = user.token;
    dispatch(userLoggedIn(user));
  });
