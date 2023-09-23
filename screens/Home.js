import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import ColorBox from '../components/box/colorbox/ColorBox';
import FlatPrev from '../components/FlatPrev';

export default function Home({ navigation }) {
  const [color, setColor] = useState([]);
  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    if (response.ok) {
      const palettes = await response.json();
      setColor(palettes);
    }
  }, []);
  useEffect(() => {
    handleFetchPalettes();
  }, []);

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {color.map((elm, index) => (
        <FlatPrev key={index} colorArr={elm} navigation={navigation} />
      ))}
    </View>
  );
}
