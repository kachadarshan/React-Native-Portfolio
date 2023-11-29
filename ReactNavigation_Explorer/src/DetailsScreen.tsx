import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


function DetailsScreen() {
    const navigation =useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.mainTxt}>DetailsScreen</Text>

            <Button 
            title='Go To Back'
            onPress={ ()=> navigation.navigate('HomeScreen') }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue"
    },
    mainTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "white"
    }

})

export default DetailsScreen;