import React, { useContext } from 'react';
import styles from './HeadingBox.style';

import { View, Text, TouchableOpacity } from 'react-native';
import ThemeColorContext from '../../../Hook/ColorPaletteContext'; // Import the ThemeContext

export default function Box({ colorName, colorCode, toggleTheme }) {
  const { bcColor, setBCColor, setOverrideTheme } =
    useContext(ThemeColorContext); // Get the bcColor value
  const handlePress = () => {
    setBCColor(colorCode);
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
