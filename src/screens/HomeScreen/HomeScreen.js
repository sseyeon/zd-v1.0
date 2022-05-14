import React, {useState} from "react";
import { Text, View, StyleSheet,TouchableHighlight, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import MyPage from "../MyPageScreen";
import Header from "../ChattingRoomScreen/Header";
import Body from "../ChattingRoomScreen/Body";
import Hosi from '../../../assets/images/hosi.jpg';
import ChatApp from "../ChattingRoomScreen/App";
import SignUpScreen_img from "../SignUpScreen/SignUpScreen_img";
const Tab = createBottomTabNavigator();
function UserList() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>UserList!</Text>
      </View>
    );
}
  
function Chatting() {
  // state = {
  //   todos: []
  // }
  // // 할일 추가 함수
  // addTodo = (todo) => {
     
  //   // 새로운 할일(todo) 객체 생성
  //   const newTodo = {
  //       id: Date.now(), // 등록시간
  //       text: todo,      // 할일 내용
  //       completed: false, // 완료 여부
  //   }   

  //   // state 업데이트
  //   this.setState(prevState => ({
  //       todos: [
  //           newTodo,       // 새로 추가된 할일(todo)
  //           ...prevState.todos // 기존의 할일 목록
  //       ]
  //   }));
   
  //   // 콘솔창에 출력해보자~
  //   console.log(this.state.todos);
  // }
  const onSignInPressed = () => {
    navigation.navigate('SignUp02', { authkey: authKey }); 

  }
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Todo App</Text> */}
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
            source={Hosi}
            style={{
              resizeMode: 'cover',
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          {/* <Text style={{fontWeight: 'bold', fontSize: 18}}>{post}</Text> */}
          <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom:5}}>김당근</Text>
          <Text>#만반잘부</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}></Text>
          <Text></Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}></Text>
          <Text></Text>
        </View>
      </View>
        <Header />
        <Body />
      </View>
    );
}
  



const HomeScreen = ({route}) => {
  const authKey_ = route.params.authkey;
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
              // tabBarLabel: 'User',
              tabBarIcon: ({ color, size }) => (
                <Feather name="user" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Chatting"
            component={ChatApp}
            options={{
              headerShown:false,

              // tabBarLabel: 'Chatting',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbubbles-outline" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPage}
            initialParams={{authKey: authKey_}}
            options={{
              headerShown:false,
              // tabBarLabel: 'MyPage',
              tabBarIcon: ({ color, size }) => (
                <Entypo name="dots-three-horizontal" size={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    fontSize: 30, 
    marginLeft: 20,
    marginBottom: 20,
  }
});


export default HomeScreen;