/**
 * Pushetta React Native App
 *
 */

import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { MainScreen } from './screens/MainScreen';
import { NotificationList } from './screens/NotificationList';

import bootstrap from './config/bootstrap';
bootstrap();

const testMessages = require('../tests/fixtures/messages.json');

const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: NotificationList,
    navigationOptions: () => ({
      data: testMessages,
    }),
  },
});

type Props = {};
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  public render() {
    return <AppContainer screenProps={testMessages} style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
