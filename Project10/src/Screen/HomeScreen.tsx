import React from 'react'
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    View,
    Pressable
} from 'react-native'

import { PRODUCTS_LIST } from '../Data/Constant'
import Seprator from '../components/Seprator'
import ProductItem from '../components/ProductItem'

function HomeScreen({ navigation }) {
    return (

        <View style={styles.container}>

            <FlatList
                data={PRODUCTS_LIST}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={Seprator}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {
                            navigation.navigate('DetailScreen', {
                                product: item
                            })
                        }}
                    >
                        <ProductItem product={item} />
                    </Pressable>
                )}
            />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff2cf",
        justifyContent: "center",
        alignItems: "center",
    },
    mainTxt: {

        fontSize: 20,
        fontWeight: "bold"
    }

})


export default HomeScreen;