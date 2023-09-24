import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Switch, View } from 'react-native';
import { useState } from 'react';
import ScreenHeaderBtn from './components/header/ScreenHeaderBtn';
import ThemeContext from './Hook/ThemeContext';

const Stack = createStackNavigator();

function App() {
  const [theme, setTheme] = useState('white');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center', // Center the header title
            headerRight: () => <ScreenHeaderBtn />,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ColorPalette"
            component={ColorPalette}
            options={({ route }) => {
              console.log('Inside options, theme:', theme);
              return { title: route.params.paletteName };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export default App;
