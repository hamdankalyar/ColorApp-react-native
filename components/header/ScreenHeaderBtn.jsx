import { View, Text, Switch } from 'react-native';
import React from 'react';
import ThemeContext from '../../Hook/ThemeContext';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
const ScreenHeaderBtn = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  useEffect(() => {
    // Update the theme when darkModeEnabled changes
    const newTheme = darkModeEnabled ? 'black' : 'white';
    console.log(newTheme);
    setTheme(newTheme);
  }, [darkModeEnabled]);

  function toggleDarkMode() {
    setDarkModeEnabled((previousState) => !previousState);
  }

  return (
    <View style={{ marginRight: 10 }}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={darkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleDarkMode}
        value={darkModeEnabled}
      />
    </View>
  );
};

export default ScreenHeaderBtn;
