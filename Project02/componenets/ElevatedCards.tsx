import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'


export default function ElevatedCards() {
    return (
        <View style={styles.flatmaincontainer}>
            <Text style={styles.flatmaintxt}>ElevatedCards</Text>
            <ScrollView horizontal={true}>

                <View style={[styles.card, styles.cardRed]}>
                    <Text> Red </Text>
                </View>
                <View style={[styles.card, styles.cardRed]}>
                    <Text> Red </Text>
                </View>
                <View style={[styles.card, styles.cardRed]}>
                    <Text> Red </Text>
                </View>
                <View style={[styles.card, styles.cardRed]}>
                    <Text> Red </Text>
                </View>
                <View style={[styles.card, styles.cardRed]}>
                    <Text> Red </Text>
                </View>
                <View style={[styles.card, styles.cardRed]}>
                    <Text> Red </Text>
                </View>
                <View style={[styles.card, styles.cardRed]}>
                    <Text> Red </Text>
                </View>
            
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({

    flatmaincontainer: {
        flex: 1
    },
    flatmaintxt: {
        fontSize: 30,
        paddingHorizontal: 8,
        marginTop: 10
    },

    maincontainer: {
        flex: 1,
        flexDirection: "row"
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
        backgroundColor: "grey",
        shadowOffset:{
            height:10,
            width:10
        },
        shadowColor:"green",
        shadowOpacity:0.9,
        shadowRadius:4

      },
})