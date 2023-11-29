import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//import screen 
import DetailsScreen from './DetailsScreen'
import HomeScreen from './HomeScreen'


function App() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='HomeScreen'>
        <stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            title: "Trending Song"
          }}
        />

        <stack.Screen
          name='DetailScreen'
          component={DetailsScreen}
          options={{
            title: "Trending Music"
          }}
        />
      </stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({


})


export default App;