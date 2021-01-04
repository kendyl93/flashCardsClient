/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import App from './App';

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <Button
        title="Login"
        color="#710ce3"
        onPress={() => Navigation.setRoot(mainRoot)}
      />
    </View>
  );
};

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

const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
    </View>
  );
};
SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
  bottomTab: {
    text: 'Settings',
  },
};

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Settings',
                },
              },
            ],
          },
        },
      ],
    },
  },
};
const loginRoot = {
  root: {
    component: {
      name: 'Login',
    },
  },
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
