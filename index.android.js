// index.android.js

// Import a library to create a conmponent

import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component

const App = () => (
    <Text>Some Text</Text>
  );

// Render it to a device.
AppRegistry.registerComponent('albums', () => App);
