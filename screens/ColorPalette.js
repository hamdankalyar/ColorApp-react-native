import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Switch,
  ScrollView,
} from 'react-native';
import { useContext, useState } from 'react';
import Box from '../components/box/headingcolorbox/HeadingBox';
import ThemeContext from '../Hook/UseContextHook';
import React from 'react';

export default function ColorPalette({ route }) {
  const { COLORS, paletteName } = route.params;
  const [theme, setTheme] = useState('white'); // Initialize as false for light mode
  const [overrideTheme, setOverrideTheme] = useState(null); // Controlled by Switch
  const backgroundcolor = overrideTheme !== null ? overrideTheme : theme;
  return (
    <ThemeContext.Provider value={{ theme, setTheme, setOverrideTheme }}>
      <View style={[styles.container, { backgroundColor: backgroundcolor }]}>
        <FlatList
          style={{ padding: 20, flex: 1 }}
          data={COLORS}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <Box colorName={item.colorName} colorCode={item.hexCode} />
          )}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>Use dark mode</Text>
        <Switch
          value={overrideTheme === 'black'}
          onValueChange={(value) => {
            setOverrideTheme(value ? 'black' : 'white');
          }}
        />
      </View>
    </ThemeContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
