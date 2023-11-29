import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


function App() {

  const [backgrncolor, setBackgrncolor] = useState("#ffffff")

  const [backccolorbox1, setBackccolorbox1] = useState("#ffffff")
  const [backccolorbox2, setBackccolorbox2] = useState("#ffffff")
  const [backccolorbox3, setBackccolorbox3] = useState("#ffffff")

  const ChnageColr = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]

    }

    setBackgrncolor(color);

  }
  
  return (
    <>

      <StatusBar backgroundColor={backgrncolor} />

      <View style={[styles.maincontainer, { backgroundColor: backgrncolor }]}>

        <View style={styles.back}>
          <TouchableOpacity onPress={ChnageColr} >
            <Text style={styles.mainTxt}>Press Me</Text>
          </TouchableOpacity>

          <View style={styles.Circlecontainer}>

            <View style={[styles.circle,{backgroundColor:backgrncolor}]}>

            </View>

            <View style={[styles.circletwo,{backgroundColor:backgrncolor}]}>

            </View>

            <View style={[styles.circlethree,{backgroundColor:backgrncolor}]}>

            </View> 
           

          </View>


        </View>


      </View>

    </>

  )
}


const styles = StyleSheet.create({
  maincontainer: {
    flex: 1

  },
  mainTxt: {
    fontSize: 25,
    borderRadius: 5,
    backgroundColor: "grey"
  },
  back: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Circlecontainer: {

    flexDirection: "row",
    marginTop: 15
  },

  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "grey"
  },
  circletwo:{
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "grey",
    marginHorizontal:10
  },
  circlethree:{
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "grey"
  }


})


export default App;