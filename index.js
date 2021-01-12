/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/Views/Home';
import SettingsScreen from './src/Views/Settings';
import LoginScreen, {loginRoot} from './src/Views/Login';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);

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
