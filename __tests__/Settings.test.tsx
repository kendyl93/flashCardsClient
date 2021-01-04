/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SettingsScreen from '../Views/Settings';

describe('SettingsScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SettingsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
