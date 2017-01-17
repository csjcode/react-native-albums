// index.android.js

// Import a library to create a conmponent

import React from 'react';
// for root component only: import { Text, AppRegistry } from 'react-native';
import { Text, App  } from 'react-native';

// Create a component

const Header = () => (
    <Text>Some Text</Text>
  );

// Render it to a device.

// for root component only: AppRegistry.registerComponent('albums', () => Header);
export default Header;
