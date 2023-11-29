import React from 'react'
import { PropsWithChildren } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'



type CurrencyButtonProps = PropsWithChildren<{
    flag: string;
    name: string;
}>

const CurrencyButton = (props: CurrencyButtonProps) => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}> {props.flag}</Text>
            <Text style={styles.country}>{props.name} </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "white"
    },
    country: {
        fontSize: 20,
        color: "white"
    }
})
export default CurrencyButton