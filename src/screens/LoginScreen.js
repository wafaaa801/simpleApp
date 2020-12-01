import React, { useState, useRef } from "react";
import { View, Switch, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { TextInput } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = (props) => {
    const [isEnabled, setIsEnable] = useState('Login');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return(
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
            <View style={{ flexDirection: 'row', bottom: 200 }}>
                <TouchableOpacity 
                    onPress={() => setIsEnable('Login')}
                    style={{
                        ...styles.buttonStyle,
                        backgroundColor: isEnabled === 'Login' ? '#D3D3D3' : 'white'
                    }} 
                >
                    <Text style={{
                            ...styles.buttonText,
                            color: isEnabled === 'Login' ? '#9400D3' : 'black'
                    }}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => setIsEnable('Sign up')}
                    style={{
                        ...styles.signupButtonStyle,
                        backgroundColor: isEnabled !== 'Login' ? '#D3D3D3' : 'white'
                    }} 
                >
                    <Text 
                        style={{
                            ...styles.buttonText,
                            color: isEnabled !== 'Login' ? '#9400D3' : 'black'
                    }}>Sign up</Text>
                </TouchableOpacity>
            </View>

            {
                isEnabled === 'Sign up' ? 
                <View style={{ height: 20, width: '90%', bottom: 100}}>
                    <TextInput
                        label="Phone Number"
                        value={phone}
                        onChangeText={phone => setPhone(phone)}
                        mode={'flat'}
                        style={{ backgroundColor: 'transparent' }}
                        // render={props =>
                        //     <TextInputMask
                        //       {...props}
                        //       options={{
                        //         mask: '999-99999999'
                        //       }} 
                        //     />
                        // }
                    />
                    <View style={{height: 20}}></View>
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                        mode={'flat'}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </View>
                :
                <View style={{ height: 20, width: '90%', bottom: 100}}>
                    <TextInput
                        label="Username"
                        value={username}
                        onChangeText={username => setUsername(username)}
                        mode={'flat'}
                        style={{ backgroundColor: 'transparent' }}
                        // render={props =>
                        //     <TextInputMask
                        //       {...props}
                        //       options={{
                        //         mask: '999-99999999'
                        //       }} 
                        //     />
                        // }
                    />
                    <View style={{height: 20}}></View>
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                        mode={'flat'}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </View>
            }

            <TouchableOpacity style={{...styles.signupButtonStyle, borderRadius: 30, top: 150}} onPress={() => props.navigation.navigate("User Stack")}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <Text style={{...styles.signupText, top: 180 }}>Forgot password?</Text>
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
    buttonStyle: {
        elevation: 8,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderColor: 'grey',
        backgroundColor: 'white',
        justifyContent: 'center',
        // paddingHorizontal: 12,
        // marginLeft: 80,
        width: '40%',
        height: 60,
        // bottom: 100
      },
    signupButtonStyle: {
        elevation: 8,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        // paddingHorizontal: 12,
        // marginHorizontal: 80,
        // marginRight: 60,
        width: '40%',
        height: 60,
        // bottom: 150
    },
    buttonText: {
        fontSize: 25,
        color: 'black',
        fontWeight: "bold",
        alignSelf: "center",
        // textTransform: "uppercase"
    },
    signupText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    }
});

export default LoginScreen;