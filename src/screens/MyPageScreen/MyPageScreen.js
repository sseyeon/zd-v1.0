import React, {useState} from "react";
import { View, Text, Image, StyleSheet,     TouchableHighlight,
    useWindowDimensions, Container, Content, Header, Left, Body, Right, Icon } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ProfileBody from "./ProfileBody";
import MyPageBody from "./MyPageBody";
import MyPageEdit from "./MyPageEdit";
import Logo from '../../../assets/images/logo-social.png';
import Hosi from '../../../assets/images/hosi.jpg';
import BottomTabView from "./BottomTabView";
const MyPageScreen = ( {route} ) => {
    const authKey = route.params.authKey;
    const onSignInPressed = () => {
        navigation.navigate('SignUp02', { authkey: authKey }); 
    }
    return (
        <View style={{ width:'100%', height:'100%', backgroundColor:'white' }}>
            <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}>
        <View style={{padding: 20, alignItems: 'center'}}>
        <TouchableHighlight onPress={() => onSignInPressed()}>
        <Image
            source={Hosi}
            style={{width: 100, height: 100, borderRadius: 100}}
            onPress={onSignInPressed} 
          />
        </TouchableHighlight>
          <Text
            style={{
              color: 'black', fontSize:30, padding: 10
            }}>
            김당근
          </Text>
          <Text
            style={{
              color: '#3493D9',padding: 2
            }}>
            25세 여성
          </Text>
          <Text
            style={{
              color: 'black', padding: 20, fontWeight:"800", fontSize:20
            }}>
            소개
          </Text>
        </View>
        {/* <CustomButton text="로그인" onPress={onSignInPressed} /> */}
        <View
            style={{
                padding : 3,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}
        />

        <BottomTabView />
        </View>
        {/* <MyPageBody 
        initialParams={{authKey: authKey}}
></MyPageBody> */}
        {/* <MyPageEdit></MyPageEdit> */}
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