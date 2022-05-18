import React, {useState} from "react";
import { View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    StyleSheet,
    Image,
    TouchableHighlight,
    TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons';
import Logo from '../../../assets/images/logo-social.png';
import Hosi from '../../../assets/images/hosi.jpg';
import BottomTabView from "./BottomTabView";
import CustomButton from "../../components/CustomButton";

const MyPageBody = ({route}) => {
//   const authKey = route.params.authKey;
    const {name} = "seyeonh";
    const {accountName} = "setse";
    const {profileImage} = {Logo};
    const navigation = useNavigation();

    const onSignInPressed = () => {
      navigation.navigate('MyPageEdit', { authkey: authKey }); 

        console.warn('log');
    }
    return (
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

        {/* <View style={{padding: 10}}>
          <View>
            <Text
              style={{
                opacity: 0.5,
              }}>
              Name
            </Text>
            <TextInput
              placeholder="name"
              defaultValue={name}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
              }}
            />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text
              style={{
                opacity: 0.5,
              }}>
              Username
            </Text>
            <TextInput
              placeholder="accountname"
              defaultValue={accountName}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
              }}
            />
          </View>
          <View style={{paddingVertical: 10}}>
            <TextInput
              placeholder="Website"
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
              }}
            />
          </View>
          <View style={{paddingVertical: 10}}>
            <TextInput
              placeholder="Bio"
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
              }}
            />
          </View>
        </View> */}
        {/* <View>
          <Text
            style={{
              marginVertical: 10,
              padding: 10,
              color: '#3493D9',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#EFEFEF',
            }}>
            Switch to Professional account
          </Text>
          <Text
            style={{
              marginVertical: 10,
              padding: 10,
              color: '#3493D9',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#EFEFEF',
            }}>
            Persnol information setting
          </Text>
        </View> */}
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
export default MyPageBody;

