import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from "../constants/colors";

const MainButton = props => { 
    return (
     <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={StyleSheet.button}>
            <Text style={StyleSheet.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
    );
};

const style = StyleSheet.create({ 
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;