import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';
import { App } from './app';

const store = createStore(reducers);

export const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
