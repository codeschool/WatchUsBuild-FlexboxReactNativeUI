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

export function LoginForm() {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="konkeror"
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="*******"
        autoCapitalize="none"
        secureTextEntry={true}
      />

      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          style={styles.button}
          underlayColor="rgb(140, 84, 109)"
          onPress={() => alert('hello world')}
          >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>
      </View>

      <KeyboardSpacer />
    </View>
  );
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
});
