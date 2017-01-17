// index.android.js

// Import a library to create a conmponent

import React from 'react';
import { Text, View } from 'react-native';

// Create a component

const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
// Render it to a device.
export default Header;
