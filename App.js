/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Crashes from 'appcenter-crashes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Crash" onPress={() => Crashes.generateTestCrash()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
