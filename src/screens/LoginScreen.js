import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { LinearGradient } from 'expo-linear-gradient';


const LoginScreen = (props) => {
    const [isEnabled, setIsEnable] = useState('Login');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const userSignIn = { username: 'Sally', password: '12345In@' }
    const userSignUp = { username: 'Sally', password: '12345In@', phone: '012345678'}

    const isLogin = async() => {
        if(userSignIn.username === username && userSignIn.password === password) {
            
            alert('Login Successful!');
            props.navigation.navigate("User Stack");
        }
        else if(username === '' && password === '') {
            alert('Please fill in your login credentials to continue');
        }
        else {
            alert('Username or password is incorrect. Try again. \n\nUsername: Sally \nPassword: 12345In@')
        }
    }

    const isSignUp = async() => {
        if(userSignUp.username === username && userSignUp.password === password && userSignUp.phone === phone) {
            alert('Account created successfully');
            props.navigation.navigate("User Stack");
        }
        else if(username === '' && password === '' && phone === '') {
            alert('Please fill in every fields to continue. \n\nUsername: Sally \nPassword: 12345In@ \nPhone: 01245678');
        }
        else{
            alert("Something is wrong with your account creation...")
        }
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
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
            <View style={{ flex: 1, flexDirection: 'row', top: 80 }}>
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
                <View style={{ flex: 1, height: 20, width: '85%', top: 20 }}>
                    <TextInput
                        label="Phone Number"
                        value={phone}
                        onChangeText={phone => setPhone(phone)}
                        mode={'flat'}
                        style={{ backgroundColor: 'transparent' }}
                    />
                    <View style={{height: 5}}></View>
                    <TextInput
                        label="Username"
                        value={username}
                        onChangeText={username => setUsername(username)}
                        mode={'flat'}
                        style={{ backgroundColor: 'transparent' }}
                    />
                    <View style={{height: 5}}></View>
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                        mode={'flat'}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </View>
                :
                <View style={{ flex: 1, height: 20, width: '85%', top: 40}}>
                    <TextInput
                        label="Username"
                        value={username}
                        onChangeText={username => setUsername(username)}
                        mode={'flat'}
                        style={{ backgroundColor: 'transparent' }}
                    />
                    <View style={{height: 20}}></View>
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                        mode={'flat'}
                        secureTextEntry={true}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </View>
            }

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', top: 50 }}>
                {
                    isEnabled == 'Sign up' ?
                        <TouchableOpacity style={{...styles.signupButtonStyle, borderRadius: 30}} onPress={() => isSignUp()}>
                            <Text style={styles.buttonText}>Sign up</Text>
                        </TouchableOpacity>
                    :
                    isEnabled == 'Login' ?
                    <TouchableOpacity style={{...styles.signupButtonStyle, borderRadius: 30}} onPress={() => isLogin()}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableOpacity>
                    :
                    <></>
                }
                <Text style={{...styles.signupText, top: 10 }}>Forgot password?</Text>
            </View>
        </ScrollView>
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