import React, {useState} from "react";
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import MyPage from "../MyPageScreen";

const Tab = createBottomTabNavigator();

function UserList() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>UserList!</Text>
      </View>
    );
}
  
function Chatting() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chatting!</Text>
      </View>
    );
}
  



const HomeScreen = () => {
    return (
        <Tab.Navigator
          initialRouteName="UserList"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }}
        >
          <Tab.Screen
            name="UserList"
            component={UserList}
            options={{
              tabBarLabel: 'User',
              tabBarIcon: ({ color, size }) => (
                <Feather name="user" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Chatting"
            component={Chatting}
            options={{
              tabBarLabel: 'Chatting',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbubbles-outline" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPage}
            options={{
              tabBarLabel: 'MyPage',
              tabBarIcon: ({ color, size }) => (
                <Entypo name="dots-three-horizontal" size={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      );
};

export default HomeScreen;