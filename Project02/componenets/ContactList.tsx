import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'


export default function ContactList() {

    const Contacts = [
        {
            Uid: 1,
            Name: "Darshan",
            Status: "Learning React-Native",
            ImageUrl: "https://media.licdn.com/dms/image/D4D03AQFxd1PQCKFN2w/profile-displayphoto-shrink_800_800/0/1684661858007?e=2147483647&v=beta&t=n-T3JvTIgQiYfTTAzuK3QrPuFdsj-fBlkcUSb5rZEXo"
        },
        {
            Uid: 2,
            Name: "Darshan",
            Status: "Learning React-Native",
            ImageUrl: "https://media.licdn.com/dms/image/D4D03AQFxd1PQCKFN2w/profile-displayphoto-shrink_800_800/0/1684661858007?e=2147483647&v=beta&t=n-T3JvTIgQiYfTTAzuK3QrPuFdsj-fBlkcUSb5rZEXo"
        },
        {
            Uid: 3,
            Name: "Darshan",
            Status: "Learning React-Native",
            ImageUrl: "https://media.licdn.com/dms/image/D4D03AQFxd1PQCKFN2w/profile-displayphoto-shrink_800_800/0/1684661858007?e=2147483647&v=beta&t=n-T3JvTIgQiYfTTAzuK3QrPuFdsj-fBlkcUSb5rZEXo"
        },
        {
            Uid: 4,
            Name: "Darshan",
            Status: "Learning React-Native",
            ImageUrl: "https://media.licdn.com/dms/image/D4D03AQFxd1PQCKFN2w/profile-displayphoto-shrink_800_800/0/1684661858007?e=2147483647&v=beta&t=n-T3JvTIgQiYfTTAzuK3QrPuFdsj-fBlkcUSb5rZEXo"
        },
        {
            Uid: 5,
            Name: "Darshan",
            Status: "Learning React-Native",
            ImageUrl: "https://media.licdn.com/dms/image/D4D03AQFxd1PQCKFN2w/profile-displayphoto-shrink_800_800/0/1684661858007?e=2147483647&v=beta&t=n-T3JvTIgQiYfTTAzuK3QrPuFdsj-fBlkcUSb5rZEXo"
        },
        {
            Uid: 6,
            Name: "Darshan",
            Status: "Learning React-Native",
            ImageUrl: "https://media.licdn.com/dms/image/D4D03AQFxd1PQCKFN2w/profile-displayphoto-shrink_800_800/0/1684661858007?e=2147483647&v=beta&t=n-T3JvTIgQiYfTTAzuK3QrPuFdsj-fBlkcUSb5rZEXo"
        },

    ]
    return (
        <View>
            <Text style={styles.headerText}>ContactList</Text>

            <View style={styles.listcontaier}>
                <ScrollView scrollEnabled={false}>
                    {
                        Contacts.map(({ Uid, Name, Status, ImageUrl }) => (
                            <View  key={Uid} style={styles.innercontainer}>
                                <Image
                                    source={{
                                        uri: ImageUrl
                                    }}
                                    style={styles.Imageofuser}
                                />
                                <View style={styles.descriptionview}>
                                    <Text style={styles.username}>
                                        {Name}
                                    </Text>
                                    <Text style={styles.userStatus}>
                                        {Status}
                                    </Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        alignItems: "center",
        color: "blue",
        paddingHorizontal:8,
        fontWeight:"bold"
    },
    listcontaier: {
        flex: 1
    },
    innercontainer: {
        flex: 1,
        flexDirection: "row",
        margin:10,
        backgroundColor:"#5410de",
        borderRadius:15,
        padding:10
    },
    Imageofuser: {
        borderRadius: 30,
        height:50,
        width:50
    },
    descriptionview: {

    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        alignItems: "center",
        paddingHorizontal: 10,

    },
    userStatus: {
        fontSize: 16,
        marginTop: 5,
        paddingHorizontal: 10,
        color: "white",
        alignItems: "center"
    }
})