import React from "react";
import {View, Text, StyleSheet,TextInput, Pressable} from 'react-native';


const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
    
    return (
        <Pressable onPress={onPress} style={[styles.container, styles['container_${type}']]}>
            <Text style={[styles.text, styles['text_${type}']]}>{text}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',
        width: '100%',
        padding:15,

        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    container_PRIMARY: {
        backgroundColor:"#3B71F3"
    },
    container_TERTIARY: {
        backgroundColor:"#3B71F3"
    },
    text: {
        fontWeight:'bold',
        color:'white'
    },
    text_TERTIARY: {
        color: 'gray'
    }
});
export default CustomButton;