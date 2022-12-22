import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Landing from './screens/Landing';
import Splash from './screens/Splash';


const Stack = createStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }} >
        <Stack.Screen name = "Splash" component = {Splash} />
        <Stack.Screen name = "Home" component = {Home}  />
        <Stack.Screen name = "Landing" component = {Landing} /> 
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;