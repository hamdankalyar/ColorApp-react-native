import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Switch } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
