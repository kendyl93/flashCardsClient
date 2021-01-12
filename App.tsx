/**
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.sectionDescription}>FlashCards Client</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionDescription: {
    backgroundColor: Colors.light,
    marginTop: 50,
    fontSize: 42,
  },
});

export default App;
