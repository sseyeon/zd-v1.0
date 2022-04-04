import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const MyPageScreen = () => {
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MyPageee!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        padding: 20,
        backgroundColor:"#fff"
    },
    logo: {
        width: '70%',
        maxWidth:300,
        maxHeight: 100,
        padding: 20,
        marginBottom:20
    },
  });
export default MyPageScreen;