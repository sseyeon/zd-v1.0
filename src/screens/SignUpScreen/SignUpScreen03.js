import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignUpScreen03 = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPassword_confirm] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <View style={[styles.logoTxt, {height: height * 0.25}]}>
                <Text style={[styles.pointTxt]}>당신이</Text>
                <Text style={[styles.plainTxt]}>원하는 모임을</Text>
                <Text style={[styles.plainTxt]}>알려주세요!</Text>

            </View>
            
            <CustomInput placeholder="성별" value={username} setValue={setUsername}/>
            <CustomInput placeholder="나이" value={username} setValue={setUsername}/>
            <CustomInput placeholder="지역" value={username} setValue={setUsername}/>
            <CustomInput placeholder="흡연여부" value={username} setValue={setUsername}/>
            <CustomInput placeholder="MBTI" value={username} setValue={setUsername}/>
            <CustomInput placeholder="종교" value={username} setValue={setUsername}/>
            <CustomInput placeholder="취미" value={username} setValue={setUsername}/>

            <CustomButton text="Next" onPress={onSignInPressed} />
            {/* <CustomButton text="회원가입" onPress={onForgetPasswordPressed} /> */}
        </View>
        </ScrollView>
    )
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
export default SignUpScreen03;