import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import { LoginScreen } from './login/LoginScreen';

export class VillainrApp extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedin: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        {
          !this.state.isLoggedin
          ? <LoginScreen />
          : <Text>Hello</Text>
        }
      </View>
    );
  }

  login(username, password) {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A1A12',
  }
});
