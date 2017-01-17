// index.android.js

// Import a library to create a conmponent

import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component

const Header = () => {
  const { textStyle } = styles;
  return  <Text style={textStyle}>Albums</Text>;
  };

const styles = {
  textStyle: {
    fontSize: 20
  }
};
// Render it to a device.
export default Header;
