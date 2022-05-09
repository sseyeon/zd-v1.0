import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/logo-social.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
            axios.post( 'https://jeeolzzps5.execute-api.us-east-1.amazonaws.com/dev/v1/auth/login/email', 
            { 
                email: username, 
                pw: password 
            }, 
            { 
                headers: { 
                    'Content-type': 'application/json', 
                    'Accept': 'application/json'
                } 
            } ) 
            .then((response) => {
                // console.warn(response.data.Authorization);
                navigation.navigate('Home', { authkey: response.data.Authorization }); 
            }) 
            .catch((response) => {
                    console.warn('등록되지 않은 사용자입니다.');
            });
        // validateUser
    }
    const onRegisterPressed = () => {
        navigation.navigate('SignUp');
    }
    

    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo, {height: height * 0.3}} resizeMode="contain"/>
            <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton text="로그인" onPress={onSignInPressed} />
            <CustomButton text="회원가입" onPress={onRegisterPressed} type="TERTIARY"/>
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
export default SignInScreen;