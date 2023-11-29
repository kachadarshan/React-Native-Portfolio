import React, { useState } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback" //haptic feedback

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Dimensions,
  Pressable

} from 'react-native'
import { PropsWithChildren } from 'react'

//Images
import dice from "../asset/dice.png"
import dice2 from "../asset/dice02.png"
import dice3 from "../asset/dice03.png"
import dice4 from "../asset/dice04.png"
import dice5 from "../asset/dice05.png"
import dice6 from "../asset/dice06.png"



type Diceprops = PropsWithChildren<{
  Imageurl: ImageSourcePropType
}>

// Optional configuration of haptic feedback
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


const Dice = ({Imageurl}:Diceprops ) => {
    return(
      <View >
          <Image source={Imageurl} style={styles.diceImage}/>
      </View>
    )
}

function App() {

  const [imatges, setImages] = useState(dice)

  const RollingDice = () => {

    let values = Math.floor(Math.random() * 6) + 1
  
    switch (values) {
      case 1:
        setImages(dice)
        break;
  
      case 2:
        setImages(dice2)
        break;
      case 3:
        setImages(dice3)
        break;
      case 4:
        setImages(dice4)
        break;
      case 5:
        setImages(dice5)
        break;
      case 6:
        setImages(dice6)
        break;
  
      default:
        setImages(dice)
        break;
    }
  
  ReactNativeHapticFeedback.trigger("impactLight", options);


  }

  return (
    <View style={styles.container}>
    <Dice Imageurl={imatges}/>

    <Pressable onPress={RollingDice}>
     
      <Text style={styles.rollDiceBtnText}>  Press Me!</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
    marginBottom:10
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  }

})


export default App;