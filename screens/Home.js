import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, { useCallback, useEffect, useState, useContext } from 'react';
import ColorBox from '../components/box/colorbox/ColorBox';
import FlatPrev from '../components/preview/FlatPrev';
import ThemeContext from '../Hook/ThemeContext';

export default function Home({ navigation, route }) {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [color, setColor] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
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
    if (newColorPalette) {
      setColor((color) => [newColorPalette, ...color]);
    }
  }, [newColorPalette]);
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);

    await handleFetchPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={color}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <FlatPrev colorArr={item} navigation={navigation} />
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPaletteModal');
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'teal',
                alignSelf: 'center',
                marginVertical: 10,
              }}
            >
              Add Color Palette
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}
