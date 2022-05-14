import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignUpScreen02 = ( {route} ) => {
    const [usergender, setUsergender] = useState('');
    const [userage, setUserage] = useState('');
    const [userregion, setUserregion] = useState('');
    const [usermbti, setUsermbti] = useState('');
    const [userhobby, setUserhobby] = useState('');
    const authKey = route.params.authkey;
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    
    // get 선언 이유: 데이터확인용. 개발 완료 후 제거
    axios.get( 'https://jeeolzzps5.execute-api.us-east-1.amazonaws.com/dev/v1/api/user/me', 
    { 
        headers: { 
            'Content-type': 'application/json', 
            'Accept': 'application/json',
            'Authorization': authKey
        } 
    } ) 
    .then((response) => {
        console.warn(response.data.email);
    }) 
    .catch((response) => {
        console.warn(response);
    });
    
    
    const onSignInPressed = () => {
        axios.put( 'https://jeeolzzps5.execute-api.us-east-1.amazonaws.com/dev/v1/api/user/me', 
        { 
            gender: usergender, 
            age: userage,
            region: userregion,
            mbti: usermbti,
            hobby: userhobby
        }, 
        { 
            headers: { 
                'Content-type': 'application/json', 
                'Accept': 'application/json',
                'Authorization':authKey
            } 
        } ) 
        .then((response) => {
            console.warn(response);
        }) 
        .catch((response) => {
                console.warn(response);
        });

        navigation.navigate('SignUpimg', { authkey: authKey });
    }
    
    return(
        // <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <View style={[styles.logoTxt, {height: height * 0.22}]}>
                <Text style={[styles.pointTxt]}>당신에</Text>
                <Text style={[styles.plainTxt]}>대하여</Text>
                <Text style={[styles.plainTxt]}>알려주세요</Text>

            </View>
            
            <CustomInput placeholder="성별" value={usergender} setValue={setUsergender}/>
            <CustomInput placeholder="나이" value={userage} setValue={setUserage}/>
            <CustomInput placeholder="지역" value={userregion} setValue={setUserregion}/>
            <CustomInput placeholder="MBTI" value={usermbti} setValue={setUsermbti}/>
            <CustomInput placeholder="취미" value={userhobby} setValue={setUserhobby}/>

            <CustomButton text="Next" onPress={onSignInPressed} />
        </View>
        // </ScrollView>
    )
};

const styles = StyleSheet.create({
    root: {
        flex:1,
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
export default SignUpScreen02;