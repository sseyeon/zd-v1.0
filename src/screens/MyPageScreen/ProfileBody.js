import React, {useState} from "react";
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions, Container, Content, Header, Left, Body, Right, Icon } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Logo from '../../../assets/images/logo-social.png';
import BottomTabView from "./BottomTabView";
const ProfileBody = () => {
    
    return (
        <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={Logo}
            style={{
              resizeMode: 'cover',
              width: 180,
              height: 180,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: 'bold',
            }}>
            {/* {name} */}
            trest
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          {/* <Text style={{fontWeight: 'bold', fontSize: 18}}>{post}</Text> */}
          <Text style={{fontWeight: 'bold', fontSize: 18}}>post</Text>
          <Text>Posts</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>followers</Text>
          <Text>Followers</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>following</Text>
          <Text>Following</Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            padding: 10,
            letterSpacing: 1,
            fontSize: 14,
          }}>
          Story Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
        </ScrollView>
      </View>
      <BottomTabView />
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
export default ProfileBody;