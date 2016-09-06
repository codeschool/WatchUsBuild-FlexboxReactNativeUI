import {dispatch} from 'redux';
import * as ActionTypes from '../constants/action-types';

export const doLogin = (username, password) => {

  return {
    type: ActionTypes.AUTH_LOGIN,
  };
  // if (username === 'admin'  && password === 'admin') {
  // }

  return authError(true);
}

export const authError = (hasLoginError = true) => ({
  type: ActionTypes.AUTH_LOGIN_ERROR,
  hasLoginError
})

export const authClearErrors = () => ({
  type: ActionTypes.AUTH_LOGIN_ERROR,
  hasLoginError: false
})
