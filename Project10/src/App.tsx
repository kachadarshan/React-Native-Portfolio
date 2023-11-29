import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screen
import HomeScreen from './Screen/HomeScreen';
import DetailScreen from './Screen/DetailScreen';



function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
        />

        <Stack.Screen
          name='DetailScreen'
          component={DetailScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({


})

export default App;