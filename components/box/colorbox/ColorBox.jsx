import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './ColorBox.style';
const ColorBox = ({ colorArray }) => {
  return (
    <FlatList
      data={colorArray.slice(0, 3)}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <View style={[styles.color, { backgroundColor: item.hexCode }]}></View>
      )}
      horizontal
    />
  );
};

export default ColorBox;
