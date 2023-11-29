import React from 'react'
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,

} from 'react-native'


export default function ActionCard() {

    function openWebsite(websiteLink :string) {
        Linking.openURL(websiteLink)
    }

    return (
        <View style={styles.maincontenbox}>
            <Text style={styles.headerText} >BlogCards </Text>
            <View style={[styles.card, styles.elevatedcard]}>
                <Text style={styles.headerTitle}>Whats New In JavaScrtipt!</Text>
                <Image
                    source={{
                        uri: "https://storage.googleapis.com/bloggingfordevs.appspot.com/blogs/-9Tl0OK02/screenshots/main-9fHfW6TEW-m.png"
                    }}
                    style={styles.cardImage} />
                <Text style={styles.cardDescription}>
                    Learning to say "I don't know"
                    JULY 7, 2022
                    This blog post discusses my recent experiences as a Tech Lead and getting comfortable with admitting when I don't know something.
                </Text>
                <View>
                    <TouchableOpacity onPress={() => openWebsite("https://www.jackfranklin.co.uk/blog/")}>
                        <Text style={styles.tochableTxt}> Read More...</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontenbox: {
        flex: 1,
        backgroundColor: "#ffffff",
        margin:10,
        borderRadius:10

    },
    headerText: {
        fontSize: 30,
        paddingHorizontal: 8,
        fontWeight: "bold"

    },
    card: {
        flex: 1,
       
     
    },
    elevatedcard: {
        elevation: 1,
    },
    headerTitle: {
        fontSize: 22,
        color: "black",
        fontWeight: "bold",
        paddingHorizontal:8,
        marginBottom:10

    },
    cardImage: {
        height: 100,
        borderRadius: 8,
        marginTop: 10,
        marginBottom:10
    },
    cardDescription: {
        fontSize: 15,
        color: "black",
        alignItems: "flex-start",
        marginTop:10,
        paddingHorizontal:8
        
    },
    tochable: {

    },
    tochableTxt: {
        fontSize: 16,
        color: "orange",
        fontWeight: "bold",
        marginBottom:10,
        paddingHorizontal:8
    }


})