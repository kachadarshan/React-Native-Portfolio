import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet

} from 'react-native'


function App() {

  return (
    <SafeAreaView style={Style.maincontainer}>
      <View>
        <Text style={Style.txtmain}>Hello Darshan Kacha</Text>
        <Text style={Style.txtmain2}>Hello Darshan Kacha</Text>
        <Text style={Style.txtmain3}>Hello Darshan Kacha</Text>
      
      </View>
    </SafeAreaView>
  )

}


const Style = StyleSheet.create({

  maincontainer:{

   
  },
  txtmain: {
  marginTop:50,
    fontSize: 25,
    color: "grey",
    backgroundColor: "red"
  },
  txtmain2:{
    marginTop:50,

    fontSize: 25,
    color: "grey",
    backgroundColor: "red"
  },
  txtmain3:{
    marginTop:50,

    fontSize: 25,
    color: "grey",
    backgroundColor: "red"
  }
})

export default App;