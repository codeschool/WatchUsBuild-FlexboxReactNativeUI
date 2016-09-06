import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { ProfileCard } from './ProfileCard';

export class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>Villainr</Text>
        </View>
        <View style={styles.body}>
          <ProfileCard />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10
  },
  navbar: {
    backgroundColor: '#2A1A12',
    padding: 10,
  },
  navbarTitle: {
    color: 'rgb(140, 84, 109)',
    fontFamily: 'American Typewriter',
    fontSize: 36,
    marginTop: 10,
    textAlign: 'center',
  },
  body: {
    backgroundColor: 'rgb(255, 255, 255)',
    flex: 1,
    width: 400,
    padding: 20
  }
});
