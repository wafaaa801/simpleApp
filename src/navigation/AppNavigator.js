// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Local imports
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddToCartScreen from '../screens/AddToCartScreen';
import BottomTabBar from './BottomTabBar';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const UserStack = () => {
    return (
        <BottomTab.Navigator
          initialRouteName={"Profile"}
          screenOptions={({ route }) => BottomTabBar(route)}
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#694fad' }}
        >
          {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
          <BottomTab.Screen name="Profile" component={ProfileScreen} />
          <BottomTab.Screen name="Shopping Cart" component={AddToCartScreen} />
          {/* <BottomTab.Screen name="Home" component={HomeScreen} /> */}
        </BottomTab.Navigator>
    );    
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        headerMode={"none"}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="User Stack" component={UserStack} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Add To Cart" component={AddToCartScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default AppNavigator;