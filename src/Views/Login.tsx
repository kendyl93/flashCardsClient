import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Please clock to login</Text>

      <Button title="Login" color="#710ce3" onPress={() => {}} />
    </View>
  );
};

export default LoginScreen;
