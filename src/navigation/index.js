import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
// import SignUpScreen from '../screens/SignUpScreen';
import SignUpScreen from "../screens/SignUpScreen";
import SignUpScreen02 from "../screens/SignUpScreen/SignUpScreen02";
import SignUpScreen03 from "../screens/SignUpScreen/SignUpScreen03";
import SignUpScreen_img from "../screens/SignUpScreen/SignUpScreen_img";
import ChatScreen from "../screens/ChattingRoomScreen/ChatScreen";
import MyPageEdit from "../screens/MyPageScreen/MyPageEdit";
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen}  />
                <Stack.Screen name="SignUp02" component={SignUpScreen02}  />
                <Stack.Screen name="SignUp03" component={SignUpScreen03}  />
                <Stack.Screen name="SignUpimg" component={SignUpScreen_img}  />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="MyPageEdit" component={MyPageEdit} />
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default Navigation;