import { SearchBar } from 'react-native-elements';
import React, { useState, useEffect } from "react";
import { 
    View, 
    Switch, 
    StyleSheet, 
    Text,
    TouchableOpacity, 
    FlatList, 
    SafeAreaView, 
    Image } 
from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const cartData = [
    {
        id: '1',
        name: 'Sofa',
        price: '$505',
        image: '../../assets/sofa-cart.png'
    },
    {
        id: '2',
        name: 'Armchair',
        price: '$220',
        image: '../../assets/armchair-cart.jpg'
    },
    {
        id: '3',
        name: 'Bed',
        price: '$760',
        image: '../../assets/bed-cart.png'
    },
    {
        id: '4',
        name: 'Chair',
        price: '$45',
        image: '../../assets/chair-cart.png'
    }
]

const Item = ({ name, price, image }) => {
    const [masterData, setMasterData] = useState([]);

    useEffect(() =>{
        setMasterData(cartData);
    }, [])

    const [quantity, setQuantity] = useState(0);
    var newQuantity;

    const increment = () => {
        newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const decrement = () => {
        newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return(
        <View style={{...styles.itemContainer, flexDirection: 'row'}}>
            <Image source={{uri: image}} style={{height:10, width:50}}></Image>

            <View style={{ bottom: 10, left: 40 }}>
                <Text style={{...styles.itemText, textAlign: 'center'}}>{name}</Text>

                <View style={{...styles.counterContainer, flexDirection: 'row'}}>
                    
                    <TouchableOpacity 
                        style={styles.decrementButton} 
                        onPress={() => decrement()}
                    >
                    {/* <Text style={{ color: 'black' }}>-</Text> */}
                        <Text style={{ 
                            fontSize: 20, 
                            color: 'black', 
                            textAlign: 'center', 
                            justifyContent: 'center'}}
                        >-</Text>
                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', right: 30}}>
                        <Text style={{
                            ...styles.itemText, 
                            textAlign: 'center', 
                            fontSize: 12}}
                        >{quantity}</Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.incrementButton} 
                        onPress={() => increment()}
                    >
                        <Text style={{
                            fontSize: 20, 
                            color: 'black', 
                            textAlign: 'center'}}
                        >+</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <Text style={{...styles.itemText, fontSize: 45, marginHorizontal: 40}}>{price}</Text>
            </View>
        </View>
    )
}


const AddToCartScreen = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const renderItem = ({ item }) => (
        <Item image={item.image}
              name={item.name}
              price={item.price}
        />
    )

    const renderEmptyList = () => {
        return(
            <View style={{ flex: 1 }}>
                <Text style={{textAlign: 'center', marginTop: 50}}>Enter your furniture above...</Text>
            </View>
        )
    }
    
    const searchFilterFunction = (text) => {
        
        if(text) {
            const newData = cartData.filter(item => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
        
                return itemData.indexOf(textData) > -1;
            })

            console.log('this text: ', text)
            console.log(newData)
            setData(newData);
            setSearch(text);
        }
        
        else {
            setData(cartData);
            setSearch(text);
        }
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
            <SafeAreaView style={styles.flatlistContainer}>
                <SearchBar
                    placeholder="Search for furnitures..."
                    lightTheme
                    round
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    autocorrect={false}
                    value={search}
                /> 
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    ListEmptyComponent={renderEmptyList}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContainer: {
        flex: 1,
        height: 80,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        marginVertical: 20,
    },
    flatlistContainer: {
        flex: 1,
        width: '80%',
        top: 50
    },
    itemText: {
        fontSize: 15,
        color: 'black',
        marginHorizontal: 40,
        textAlign: 'right',
        paddingVertical: 20
    },
    counterContainer: {
        flex: 1,
        height: 50, 
        width: 100, 
        borderWidth: 2, 
        borderColor: 'black', 
        bottom: 10,
        borderRadius: 5,
        marginHorizontal: 20
    },
    incrementButton: {
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 5,
        right: 40,
        bottom: 5
    },
    decrementButton: {
        height: 30,
        width: 30, 
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 5,
        borderWidth: 2,
        right: 10,
        bottom: 5
    }

})
export default AddToCartScreen;