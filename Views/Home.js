import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

const HomeScreen = (props) => {
  useEffect(() => {
    fetch('http://192.168.1.7:4000/api', {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InAuc3RhbmVja2k5M0BnbWFpbC5jb20iLCJuYW1lIjoiUGF3ZWwifQ.AWmFVS-4OLc8GdlX0p1g0CRnA4iqYl_cg7vDXABWqgI',
      },
    })
      .then((data) => data.json())
      .then((curentUser) => {
        console.log({curentUser});
      })
      .catch((error) => {
        debugger;
        console.error(error);
      });
  }, []);
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>

      <Button
        title="Push Settings Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings',
            },
          })
        }
      />
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

export default HomeScreen;
