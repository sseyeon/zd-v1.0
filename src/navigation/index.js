import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from '../screens/SignInScreen';
// import SignUpScreen from '../screens/SignUpScreen';
import SignUpScreen from "../screens/SignUpScreen";
import SignUpScreen02 from "../screens/SignUpScreen/SignUpScreen02";
import SignUpScreen03 from "../screens/SignUpScreen/SignUpScreen03";
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen}  />
                <Stack.Screen name="SignUp02" component={SignUpScreen02}  />
                <Stack.Screen name="SignUp03" component={SignUpScreen03}  />
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default Navigation;