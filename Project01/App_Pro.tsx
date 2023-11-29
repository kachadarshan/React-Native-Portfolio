import React from "react";

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme

} from 'react-native';

function App_Pro(): JSX.Element {

    const isDarkMode = useColorScheme() === "dark"

    return (
        <View style={Style.maincontainer}>
            <Text style={isDarkMode ? Style.whiteText : Style.darkText}>Hello This is App_pro</Text>
        </View>
    )
}


const Style = StyleSheet.create({

    maincontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    whiteText:{
        color:"black"   
    },
    darkText:{
        color:"white"
    }
})

export default App_Pro;