import React, { useContext } from 'react';
import styles from './HeadingBox.style';

import { View, Text, TouchableOpacity } from 'react-native';
import ThemeContext from '../../../Hook/UseContextHook'; // Import the ThemeContext

export default function Box({ colorName, colorCode, toggleTheme }) {
  const { theme, setTheme, setOverrideTheme } = useContext(ThemeContext); // Get the theme value
  const handlePress = () => {
    setTheme(colorCode);
    setOverrideTheme(null); // Reset the override
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.box, { backgroundColor: colorCode }]}>
        <Text>
          {colorName} :{colorCode}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
