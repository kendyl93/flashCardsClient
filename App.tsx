/**
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/Views/Home';
import SettingsScreen from './src/Views/Settings';
import LoginScreen from './src/Views/Login';
import LogoutScreen from './src/Views/Logout';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [userToken, setUserToken] = useState(false);
  return (
    <NavigationContainer>
      {userToken ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Login') {
                iconName = focused ? 'log-in' : 'log-in';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings';
              } else if (route.name === 'Logout') {
                iconName = focused ? 'log-out' : 'log-out';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Logout">
            {(props) => <LogoutScreen {...props} setUserToken={setUserToken} />}
          </Tab.Screen>
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} setUserToken={setUserToken} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
