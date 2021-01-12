/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../src/Views/Home';

describe('HomeScreen', () => {
  it('renders correctly', async () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
