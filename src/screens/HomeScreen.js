import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['red', 'yellow']}
        // style={styles.container}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <Text style={styles.titleText}>ONLINE FURNITURE {'\n'}STORE</Text>
      <Image
        style={styles.image}
        source={require('../../assets/sofa-outline.png')}
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.subText}>Don't have an account?</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles.signInText}>Sign in here</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    bottom: 150,
    textAlign: 'center'
  },
  image: {
    width: 230,
    height: 100,
    bottom: 100
  },
  buttonStyle: {
    elevation: 8,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 12,
    width: '60%',
    height: 60,
    top: 60
  },
  buttonText: {
    fontSize: 25,
    color: 'black',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  textContainer: {
    justifyContent: 'center',
    top: 100
  },
  subText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  signInText: {
    fontSize: 25,
    color: 'white',
    textDecorationLine: 'underline',
    textAlign: 'center',
    top: 20
  }
});

export default HomeScreen;