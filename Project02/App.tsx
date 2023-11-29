import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,

} from 'react-native'
import FlatCards from './componenets/FlatCards'
import ElevatedCards from './componenets/ElevatedCards'
import FancyCard from './componenets/FancyCard'
import ActionCard from './componenets/ActionCard'
import ContactList from './componenets/ContactList'


const App = () => {
  return (
    <SafeAreaView style={Style.maincontainer}>
      <ScrollView style={Style.scrollvieww}>
        <View style={Style.mainbackground}>
        
          <FlatCards />
          <ElevatedCards />
          <FancyCard/>
          <ActionCard/>
          <ContactList/>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}


const Style = StyleSheet.create({

  maincontainer: {
    flex: 1,
    backgroundColor:"#bce8f7"

  },
  maintxt: {
    fontSize: 25,
    color: "red",
  },
  mainbackground:{
    flex:1,
  
  },
  scrollvieww:{
    marginBottom:10
  }
  


})

export default App