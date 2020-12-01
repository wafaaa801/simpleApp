import { Avatar, List, ListItem } from 'react-native-elements';
import React, { useState, useRef } from "react";
import { View, Switch, StyleSheet, Text, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const mockData = [
    {
        id: '1',
        name: 'Messages',
        icon: 'ios-mail'
    },
    {
        id: '2',
        name: 'Notifications',
        icon: 'ios-notifications'
    },
    {
        id: '3',
        name: 'Account Details',
        icon: 'md-person'
    },
    {
        id: '4',
        name: 'My purchases',
        icon: 'ios-cart'
    },
    {
        id: '5',
        name: 'Settings',
        icon: 'ios-cog'
    }
];

const Item = ({ name, icon }) => {
return(
    <View style={{...styles.item, flexDirection: 'row'}}>
        <View style={{ right: 50 }}>
            <Ionicons name={icon} size={25} color={'white'} />
        </View>
        <View style={{ right: 30 }}>
            <Text style={styles.title}>{name}</Text>
        </View>
    </View>
)}

const ProfileScreen = () => {

    const renderItem = ({ item }) => (
        <Item name={item.name}
              icon={item.icon} 
        />
    );

    const itemSeparator = () => {
        return(
            <View style={{
                height: 1,
                backgroundColor: "rgba(0,0,0,0.5)",
                marginLeft: 10,
                marginRight: 10,
            }}
            />
        )
    }

    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['red', 'yellow']}
                style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: "100%",
                }}
            />
            <View style={{ top: 10 }}>
                <Avatar
                    rounded
                    icon={{name: 'user', type: 'font-awesome'}}
                    source={{
                        uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                    size={150}
                    containerStyle={{marginBottom: 100}}
                />
                <View style={{top: 50}}>
                    <Text style={styles.titleText}>Your name</Text>
                    <Text style={{...styles.titleText, fontSize: 25, fontWeight: 'regular'}}>Sally</Text>
                </View>
            </View>

        <SafeAreaView style={styles.flatlistContainer}>
            <FlatList
                data={mockData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeparator}
            />
        </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: 'black'
    },
    flatlistContainer: {
        width: '80%',
        bottom: 50
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        bottom: 150,
        textAlign: 'center'
    },
    item: {
        backgroundColor: 'transparent',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 60
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
})

export default ProfileScreen;