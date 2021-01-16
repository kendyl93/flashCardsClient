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

const LogoutScreen = ({navigation, setUserToken}) => {
  return (
    <View style={styles.root}>
      <Text>Please clock to Logout</Text>

      <Button title="Logout" onPress={() => setUserToken(false)} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default LogoutScreen;
