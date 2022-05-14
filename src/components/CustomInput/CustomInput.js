import React from "react";
import {View, Text, StyleSheet,TextInput} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                placeholderTextColor = "black"
                style={styles.input}
                secureTextEntry={secureTextEntry}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width:'100%',
        padding:15,
        // borderColor: '#e8e8e8',
        borderWidth:1,
        borderRadius:25,

        paddingHorizontal:10,
        marginVertical:5
    },
    input: {
        // fontWeight:'bold',
        color:'black'
    }
});
export default CustomInput;