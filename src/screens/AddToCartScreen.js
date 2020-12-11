import { SearchBar } from 'react-native-elements';
import React, { useState } from "react";
import { 
    View, 
    StyleSheet, 
    Text,
    TouchableHighlight, 
    FlatList, 
    SafeAreaView, 
    Image } 
from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const cartData = [
    {
        id: '1',
        name: 'Sofa',
        actualPrice: '$700',
        price: '$505',
        image: require('../../assets/sofa-cart.png')
    },
    {
        id: '2',
        name: 'Armchair',
        actualPrice: '$790',
        price: '$220',
        image: require('../../assets/armchair-cart.png')
    },
    {
        id: '3',
        name: 'Bed',
        actualPrice: '$790',
        price: '$760',
        image: require('../../assets/bed-cart.png')
    },
    {
        id: '4',
        name: 'Chair',
        actualPrice: '$790',
        price: '$450',
        image: require('../../assets/chair-cart.png')
    }
]

const Item = ({ name, price, image, actualPrice }) => {

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
        <View style={{...styles.itemContainer}}>

            {/* product name and price container */}
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, top: 40, left: 20}}>
                    <Image 
                        source={image} 
                        style={{ height: 80, width: 80 }}
                    />
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', right: 80, top: 5 }}>
                    <Text style={{...styles.itemText, fontSize: 20}}>{name}</Text>
                </View>
              
            </View>

            {/* increment, decrement container */}
            <View style={{ flexDirection: 'row', left: 40 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight 
                        activeOpacity={0.6}
                        underlayColor="#FF7F50"
                        style={styles.decrementButton} 
                        onPress={() => decrement()}
                    >
                        <Text style={{ 
                            fontSize: 40, 
                            color: 'black',
                            bottom: 2
                        }}
                        >-</Text>
                    </TouchableHighlight>

                    <View style={styles.quantityContainer}>
                        <Text style={{
                            ...styles.itemText,  
                            fontSize: 14,
                        }}
                        >{quantity}</Text>
                    </View>

                    <TouchableHighlight 
                        activeOpacity={0.6}
                        underlayColor="#FF7F50"
                        style={styles.incrementButton} 
                        onPress={() => increment()}
                    >
                        <Text style={{
                            ...styles.itemText, 
                            fontSize: 40,  
                            color: 'black', 
                            textAlign: 'center',
                            bottom: 2
                        }}
                        >+</Text>
                    </TouchableHighlight>  
                </View>
                    <View style={{ left: 20, bottom: 40 }}>
                        <Text style={{
                            ...styles.itemText, 
                            fontSize: 25, 
                            textDecorationLine: 'line-through',
                            color: 'grey'
                            }}>{actualPrice}</Text>  
                        <Text style={{...styles.itemText, fontSize: 40}}>{price}</Text>  
                    </View>
            </View>
        </View>
    )
}


const AddToCartScreen = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const renderItem = ({ item }) => (
        <Item name={item.name}
              actualPrice={item.actualPrice}
              price={item.price}
              image={item.image}  
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
                {/* <View style={{width: 0}}> */}
                <SearchBar
                    placeholder="Search for furnitures..."
                    lightTheme
                    //round
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    autocorrect={false}
                    value={search}
                /> 
                {/* </View> */}
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
        height: 100,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    flatlistContainer: {
        flex: 1,
        width: '90%',
        top: 50
    },
    itemText: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
    },
    incrementButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 2,
        bottom: 8
    },
    decrementButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30, 
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 2,
        bottom: 8
    },
    quantityContainer: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center', 
        bottom: 8
    }
})
export default AddToCartScreen;