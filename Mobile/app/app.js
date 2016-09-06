import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as VillainrActions from './actions';

import { LoginScreen } from './components/login/LoginScreen';
import { ProfileScreen } from './components/profile/ProfileScreen';

class VillainrApp extends Component {
  render() {
    const { auth, actions } = this.props

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        {
          auth.isLoggedIn
            ? <ProfileScreen {...this.props} />
            : <LoginScreen {...this.props} />
        }
      </View>
    );
  }
}

VillainrApp.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A1A12',
  }
});

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(VillainrActions, dispatch)
  }
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(VillainrApp)
