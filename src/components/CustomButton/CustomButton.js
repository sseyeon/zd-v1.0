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
        backgroundColor: 'white',
        width: '100%',
        padding:15,
        borderWidth:1,
        marginVertical:5,
        alignItems:'center',
        borderRadius:25
    },
    container_PRIMARY: {
        backgroundColor:"#fff"
    },
    container_TERTIARY: {
        backgroundColor:"#fff"
    },
    text: {
        fontWeight:'bold',
        color:'black'
    },
    text_TERTIARY: {
        color: 'gray'
    }
});
export default CustomButton;