import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


export default function FancyCard() {

    return (
        <View style={styles.cadImagedes}>
            <Text style={styles.headingText}>FancyCard</Text>
            <Image
                style={styles.imageDesign}
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/9/91/Gate_of_Junagadh.jpg" }}
            />
            <View >
                <Text style={styles.cardTitle}> Junagadh</Text>
                <Text style={styles.cardSubTitle}> Uperkot</Text>
                <Text style={styles.cardDescription}> A fort and town was established at the foothills of Girnar hill during reign of the Maurya Empire and continued to be used during Gupta period, but it lost its importance when the capital of Saurashtra region was moved from Junagadh to Vallabhi by Maitraka. Chudasamas settled around Junagadh from 875 CE according to bards when they acquired Vamansthali (Vanthli) from Chavda ruler</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({

    headingText: {
        padding: 8,
        fontSize: 30
    },
    imageDesign: {
        height: 210,
        margin: 8,
        borderRadius:10

    },
    cadImagedes: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        margin: 6

    },
    cardTitle: {
        fontSize: 28,
        color: "#000000",
        fontWeight: "bold",
        padding: 6


    },
    cardSubTitle: {
        fontSize: 22,
        padding: 6,
        color: "#000000",

    },
    cardDescription: {
        fontSize: 20
        ,
        padding: 8
    }

})