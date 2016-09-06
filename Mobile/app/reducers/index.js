import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';

export const reducers = combineReducers({
  auth: authReducer
});
