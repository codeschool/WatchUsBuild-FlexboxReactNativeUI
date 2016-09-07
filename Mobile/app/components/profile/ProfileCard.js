import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { ProfileControls } from './ProfileControls';

export class ProfileCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image source={require('./img/villainr-profile.png')} style={styles.avatar} />
        <Text style={styles.name}>Nameson McNamerson</Text>
        <Text style={styles.bio}>How bad this person is and who they are bad to.</Text>

        <ProfileControls />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: '#E3E7E7',
    borderWidth: 1,
    padding: 20,
  },
  avatar: {
    height: 260,
    width: 260,
    alignSelf: 'center',
  },
  name: {
    color: '#281910',
    fontSize: 22,
    fontFamily: 'American Typewriter',
    marginTop: 15
  },
  bio: {
    color: '#61757A',
    fontFamily: 'American Typewriter',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 20,
  },
})
