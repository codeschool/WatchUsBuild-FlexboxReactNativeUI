import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export class ProfileControls extends Component {
  render() {
    return (
      <View style={styles.controls}>
        <TouchableHighlight
          style={[styles.icon, styles.iconPositive]}
          underlayColor="rgb(140, 84, 109)"
          onPress={() => alert('Positive')}
        >
          <Image source={require('./img/icon-positive.png')} style={styles.iconImg} />
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.icon, styles.iconInfo]}
          underlayColor="rgb(140, 84, 109)"
          onPress={() => alert('Info')}
        >
          <Image source={require('./img/icon-information.png')} style={styles.iconImg} />
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.icon, styles.iconNegative]}
          underlayColor="rgb(140, 84, 109)"
          onPress={() => alert('Negative')}
        >
          <Image source={require('./img/icon-negative.png')} style={styles.iconImg} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  controls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    borderColor: '#E3E7E7',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 100/2,
    width: 80,
    height: 80,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconPositive: {

  },
  iconNegative: {

  },
  iconInfo: {
    width: 60,
    height: 60,
  },
  iconImg: {
    width: 45,
    height: 45
  }
});
