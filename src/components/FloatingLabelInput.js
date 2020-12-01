import React, { Component, useState } from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';

const FloatingLabelInput = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    // const labelStyle = {
    //     position: 'absolute',
    //     left: 0,
    //     top: !isFocused ? 18 : 0,
    //     fontSize: !isFocused ? 20 : 14,
    //     color: !isFocused ? '#aaa' : '#000',
    // };

    return (
      <View style={{ paddingTop: 18 }}>
        <Text>
          Password
        </Text>
        <TextInput
          style={{ height: 26, fontSize: 20, color: '#000', borderBottomWidth: 1, borderBottomColor: '#555' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          blurOnSubmit
        />
      </View>
    );
}

export default FloatingLabelInput;