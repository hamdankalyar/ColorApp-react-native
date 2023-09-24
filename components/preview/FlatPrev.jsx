import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useContext } from 'react';
import ColorBox from '../box/colorbox/ColorBox.jsx';
import ThemeContext from '../../Hook/ThemeContext.js';
import styles from './FlatPrev.style.js';

const FlatPrev = ({ colorArr, navigation }) => {

  const { theme } = useContext(ThemeContext);
 
  return (
    <View style={{ flex: 1, backgroundColor: theme }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ColorPalette', {
            paletteName: colorArr.paletteName,
            COLORS: colorArr.colors,
          })
        }
      >
        <View>
          <Text style={theme === 'black' ? styles.dark : styles.white}>
            {colorArr.paletteName}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <ColorBox colorArray={colorArr.colors} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FlatPrev;
