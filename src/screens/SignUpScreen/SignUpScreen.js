import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        if (username == '') {

        }
        if (password !== passwordRepeat) {
            console.warn('비밀번호를 확인해주세요.');
        } else {
            axios.post( 'https://jeeolzzps5.execute-api.us-east-1.amazonaws.com/dev/v1/auth/register/email', 
            { 
                email: email, 
                pw: password 
            }, 
            { 
                headers: { 
                    'Content-type': 'application/json', 
                    'Accept': 'application/json'
                } 
            } ) 
            .then((response) => {
                console.warn(response.data.Authorization);
                navigation.navigate('SignUp02', { authkey: response.data.Authorization }); 
                // navigation.navigate('SignUp02', { authkey: response.authorization }); 
            }) 
            .catch((response) => {
                // console.warn(response);
                    console.warn('중복된 사용자 정보 입니다.');
                    navigation.navigate('SignUp02', {authkey: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTgsImVtYWlsIjoic2V5amVvbmdAd2l6YmFzZS5jby5rciIsIm5hbWUiOm51bGwsInBob25lX251bWJlciI6bnVsbCwicHJvZmlsZV9pbWciOm51bGwsInNuc190eXBlIjpudWxsfQ.XxSOOUbtGOjYLd4mzrct0fP4XLrBcR2zBjRyxDDeluQ'}); 

                // if (response.status === '200') {
                // }
            });
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <View style={[styles.logoTxt, {height: height * 0.25}]}>
                <Text style={[styles.pointTxt]}>당신을</Text>
                <Text style={[styles.plainTxt]}>어떻게</Text>
                <Text style={[styles.plainTxt]}>불러드릴까요?</Text>

            </View>
            
            <CustomInput placeholder="닉네임" value={username} setValue={setUsername}/>
            <CustomInput placeholder="이메일" value={email} setValue={setEmail}/>
            <CustomInput placeholder="비밀번호" value={password} setValue={setPassword} secureTextEntry/>
            <CustomInput placeholder="비밀번호 재확인" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry/>

            <CustomButton text="Next" onPress={onSignInPressed} />
        </View>
        </ScrollView>
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
        maxHeight: 100
    },
    logoTxt: {
        width: '100%',
        // fontSize:46,
        // fontWeight:'600',
        maxWidth: 300,
        height: 200
    },
    pointTxt:{
        padding: 5,
        fontSize:46,
        color:'orange',
        fontWeight:'600',
        
    },
    plainTxt: {
        padding: 5,
        fontSize:46,
        fontWeight:'600',

    }
  });
export default SignUpScreen;