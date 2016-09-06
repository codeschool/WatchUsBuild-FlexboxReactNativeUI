import {dispatch} from 'redux';
import * as ActionTypes from '../constants/action-types';

export const doLogin = (username, password) => {

  if (username === 'admin'  && password === 'admin') {
    return {
      type: ActionTypes.AUTH_LOGIN,
    };
  }

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
