import React from 'react';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const BottomTabBar = (route) => ({
    tabBarIcon: () => {

        if (route.name === 'Profile') {
            return <Ionicons name={'ios-person'} size={20} color={'#808080'} />;
        }
        else if (route.name === 'Shopping Cart') {
            return <FontAwesome5 name={'shopping-bag'} size={20} color={'#808080'} />;
        }
        else {
            return <Ionicons name={'md-cog'} size={20} color={'#808080'} />;
        }
    }
});

export default BottomTabBar
