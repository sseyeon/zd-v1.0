import React from 'react';
import { View, Image, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './MessageStyles';
import Hosi from '../../../assets/images/hosi.jpg';
import CustomButton from '../../components/CustomButton';

const Messages = [
  {
    id: '1',
    userName: '작당 모임',
    userImg: require('../../../assets/users/user1.jpg'),
    messageTime: '4 mins ago',
    messageText:
      '안녕하세요 :) 반갑습니다!',
  },
  {
    id: '2',
    userName: '삐삐',
    userImg: require('../../../assets/users/user2.jpg'),
    messageTime: '2 hours ago',
    messageText:
      '얼른 토마토 드세요!!',
  },
  {
    id: '3',
    userName: '이오이',
    userImg: require('../../../assets/users/user3.jpeg'),
    messageTime: '1 hours ago',
    messageText:
      '왜? 아직도 못드셨나용?',
  },
];

const App = ({navigation}) => {
  const onSignInPressed = () => {
    // navigation.navigate('Home', { authkey: authKey }); 
  }
    return (
      <View style={styles.root}>
        <View style={styles.elem}>
            <View style={styles.userInfo}>
            <Image
                source={Hosi}
                style={{
                  resizeMode: 'cover',
                  width: 60,
                  height: 60,
                  borderRadius: 20,
                }}
              />
              {/* <View style={styles.profile} /> */}
              <Text style={styles.name}>김당근</Text>
            </View>
            <View style={styles.userComment}>
              <Text>#만반잘부</Text>
            </View>
          </View>
          <View style={styles.area01}>
              <Text>광고 자리</Text>
          </View>

        <View style={styles.area02}>
          <View>
            <FlatList 
              data={Messages}
              keyExtractor={item=>item.id}
              renderItem={({item}) => (
                <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
                  <UserInfo>
                    <UserImgWrapper>
                      <UserImg source={item.userImg} />
                    </UserImgWrapper>
                    <TextSection>
                      <UserInfoText>
                        <UserName>{item.userName}</UserName>
                        <PostTime>{item.messageTime}</PostTime>
                      </UserInfoText>
                      <MessageText>{item.messageText}</MessageText>
                    </TextSection>
                  </UserInfo>
                </Card>
              )}
            />

          </View>
        </View>
        <CustomButton text="모임 추천 받기" onPress={onSignInPressed} />

      </View>
    );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex:1,
    alignItems:'center',
    padding: 20,
    backgroundColor:"#fff"
},
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  area01: {
    flex: 1
  },
  area02: {
    flex: 6, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  elem: {
    flex:1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor:'#eee',
    borderBottomWidth:0.5,
    padding: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userComment: {
    padding:8,
    backgroundColor:'yellow',
    borderRadius:5,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'yellow',
  },
  name: {
    paddingLeft: 10,
    fontWeight:"bold",
    fontSize:32
  }
});