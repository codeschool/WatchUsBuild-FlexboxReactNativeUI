import React from 'react';
import { LoginForm } from './LoginForm';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={require('./img/villainr-brand.png')} style={styles.img} />
      <Text style={styles.title}>Villainr</Text>
      <Text style={styles.subtitle}>Meet diabolical co-conspirators</Text>

      <LoginForm {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 150,
    height: 178,
  },
  title: {
    color: 'rgb(140, 84, 109)',
    fontFamily: 'American Typewriter',
    fontSize: 48,
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: 'rgb(153, 166, 167)',
    fontFamily: 'American Typewriter',
    fontSize: 22,
    margin: 5,
    textAlign: 'center',
  },
});
