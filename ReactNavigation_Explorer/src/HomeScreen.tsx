import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function HomeScreen({navigation}) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.mainTxt}>HomeScreen</Text>
            <Button 
            title='Go To DetailsScr'
            onPress={() => navigation.navigate("DetailScreen") }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange"
    },
    mainTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "white"
    }


});

export default HomeScreen;