/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from '../src/Views/Login';

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
