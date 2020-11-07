/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import React  from 'react';
import { View , Text, StyleSheet } from 'react-native';
import App from './App';

const HomeScreen = (props) => {
    return (
      <View style={styles.root}>
        <Text>Hello React Native Navigation 👋</Text>
      </View>
    );
  };

  HomeScreen.options = {
    topBar: {
      title: {
        text: 'Home',
        color: 'white'
      },
      background: {
        color: '#4d089a'
      }
    }
}
  

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'whitesmoke'
    }
  });

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'Home'
             }
           }
         ]
       }
     }
  });
});