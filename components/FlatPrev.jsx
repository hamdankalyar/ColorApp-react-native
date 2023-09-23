import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import ColorBox from './box/colorbox/ColorBox.jsx';

const FlatPrev = ({ colorArr, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ColorPalette', {
          paletteName: colorArr.paletteName,
          COLORS: colorArr.colors,
        })
      }
    >
      <View>
        <Text>{colorArr.paletteName}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <ColorBox colorArray={colorArr.colors} />
      </View>
    </TouchableOpacity>
  );
};

export default FlatPrev;
