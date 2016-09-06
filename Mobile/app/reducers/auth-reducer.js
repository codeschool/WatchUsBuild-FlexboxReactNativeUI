import * as ActionTypes from '../constants/action-types';

const initialState = {
  isLoggedIn: false,
  hasLoginError: false
};

export const authReducer = function(state = initialState, action) {

  switch (action.type) {
    case ActionTypes.AUTH_LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
      break;

    case ActionTypes.AUTH_LOGIN_ERROR:
      return {
        ...state,
        hasLoginError: action.hasLoginError
      };
      break;
  }

  return state;
}
