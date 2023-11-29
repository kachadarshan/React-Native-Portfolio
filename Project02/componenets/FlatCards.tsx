import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function FlatCards() {

  return (
    <View style={styles.flatmaincontainer}>
      <Text style={styles.flatmaintxt}>FlatCards</Text>

      <View style={styles.maincontainer}>
        <View style={[styles.card, styles.cardRed]}>
          <Text> Red </Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
          <Text> Green </Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text> Blue </Text>
        </View>
    
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flatmaincontainer: {
    flex: 1
  },
  flatmaintxt: {
    fontSize: 30,
    paddingHorizontal: 8
  },

  maincontainer: {
    flex: 1,
    flexDirection:"row"
  },
  card: {
    height: 100,
    width: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 8

  },
  cardRed: {
    backgroundColor: "red"
  },
  cardGreen: {
    backgroundColor: "green"
  },
  cardBlue: {
    backgroundColor: "blue"
  },
  cardYellow: {
    backgroundColor: "yellow"
  }

})

export default FlatCards;