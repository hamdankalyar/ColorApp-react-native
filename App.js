import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Switch, View } from 'react-native';
import { useState } from 'react';
import ScreenHeaderBtn from './components/header/ScreenHeaderBtn';
import ThemeContext from './Hook/ThemeContext';
import ColorPaletteModal from './screens/ColorPaletteModal';
const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
     screenOptions={{
            headerTitleAlign: 'center', // Center the header title
            headerRight: () => <ScreenHeaderBtn />,
          }}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

function App() {
  const [theme, setTheme] = useState('white');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerTitleAlign: 'center', // Center the header title
            headerRight: () => <ScreenHeaderBtn />,
          }}
        >
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options = {{headerShown:false}}

        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
          

        />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export default App;
