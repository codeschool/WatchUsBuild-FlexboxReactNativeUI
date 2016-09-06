import React from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    this.doLogin = this.doLogin.bind(this);
  }

  render() {
    return (
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="konkeror"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(username) => this.setState({ username })}
          />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="*******"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
          />

        <View style={styles.buttonWrapper}>

          {this.props.auth.hasLoginError
            ? <Text style={styles.errorText}>Invalid username or password</Text>
            : null}

          <TouchableHighlight
            style={styles.button}
            underlayColor="rgb(140, 84, 109)"
            onPress={this.doLogin}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableHighlight>

        </View>

        <KeyboardSpacer />
      </View>
    );
  }

  doLogin() {
    const {authClearErrors, doLogin} = this.props.actions;
    const {username, password} = this.state;
    
    authClearErrors();
    doLogin(username, password);
  }
}

const styles = StyleSheet.create({
  form: {
    width: 300,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#EAEAEA',
    borderRadius: 4,
    fontFamily: 'American Typewriter',
    height: 40,
    marginBottom: 10,
    padding: 10,
  },
  label: {
    color: 'rgb(153, 166, 167)',
    fontFamily: 'American Typewriter',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 40,
    backgroundColor: 'rgb(164, 215, 211)',
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'American Typewriter',
    fontSize: 18,
  },
  errorText: {
    color: 'rgb(230, 143, 143)',
    marginTop: 10
  },
});
