import React, {useState} from "react";
import { View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    StyleSheet,
    Image,
    TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons';
import Logo from '../../../assets/images/logo-social.png';
import CustomButton from "../../components/CustomButton";
import axios from "axios";
const MyPageEdit = () => {
    const {name} = "seyeonh";
    const {id} = "";
    const [nickName, setNickname] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [region, setRegion] = useState('');
    const [job, setJob] = useState('');
    const [mbti, setMbti] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const navigation = useNavigation();
    const onSignInPressed = () => {
        // get 선언 이유: 데이터확인용. 개발 완료 후 제거
        axios.get( 'https://jeeolzzps5.execute-api.us-east-1.amazonaws.com/dev/v1/api/user/me', 
        { 
            headers: { 
                'Content-type': 'application/json', 
                'Accept': 'application/json',
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTgsImVtYWlsIjoic2V5amVvbmdAd2l6YmFzZS5jby5rciIsIm5hbWUiOm51bGwsInBob25lX251bWJlciI6bnVsbCwicHJvZmlsZV9pbWciOm51bGwsInNuc190eXBlIjpudWxsfQ.XxSOOUbtGOjYLd4mzrct0fP4XLrBcR2zBjRyxDDeluQ'
            } 
        } ) 
        .then((response) => {
            id = console.warn(response.data.id);
        }) 
        .catch((response) => {
            console.warn(response);
        });
    

        axios.put( 'https://jeeolzzps5.execute-api.us-east-1.amazonaws.com/dev/v1/api/user/me', 
        { 
            id: id, 
            name: nickName, 
            // email: email,
            phone_number: phoneNum,
            profile_img:'',
            sns_type:'',
            location:region,
            hobby:'',
            mbti:mbti,
            status:"active",
            gender:gender,
            age:age

        }, 
        { 
            headers: { 
                'Content-type': 'application/json', 
                'Accept': 'application/json',
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTgsImVtYWlsIjoic2V5amVvbmdAd2l6YmFzZS5jby5rciIsIm5hbWUiOm51bGwsInBob25lX251bWJlciI6bnVsbCwicHJvZmlsZV9pbWciOm51bGwsInNuc190eXBlIjpudWxsfQ.XxSOOUbtGOjYLd4mzrct0fP4XLrBcR2zBjRyxDDeluQ'
            } 
        } ) 
        .then((response) => {
            // console.warn(response.data.Authorization);
            navigation.navigate('Home', { authkey: response.data.Authorization }); 
        }) 
        .catch((response) => {
                console.warn('등록되지 않은 사용자입니다.');
        });
    // validateUser
    }
    return (
        <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}>
        <View style={{padding: 20, alignItems: 'left'}}>
          <Image
            source={Logo}
            style={{width: 100, height: 100, borderRadius: 100}}
          />
        </View>
        
        <View
            style={{
                padding : 3,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}
        />
        <View style={{padding: 10}}>
          <View >
            <Text
              style={[styles.text]}>
              닉네임
            </Text>
            <TextInput
              placeholder="name"
              style={[styles.textInput]}
              value={nickName}
              setValue={setNickname}
            />
          </View>
          <View style={[styles.textView]}>
            <Text
              style={[styles.text]}>
              성별
            </Text>
            <TextInput
              placeholder="Gender"
              style={[styles.textInput]}
              value={gender}
              setValue={setGender}            />
          </View>
          <View style={[styles.textView]}>
            <Text
              style={[styles.text]}>
              나이
            </Text>
            <TextInput
              placeholder="age"
              defaultValue={age}
              style={[styles.textInput]}
              value={age}
              setValue={setAge} 
            />
          </View>
          <View style={[styles.textView]}>
            <Text
              style={[styles.text]}>
              지역
            </Text>
            <TextInput
              placeholder="region"
              defaultValue={region}
              style={[styles.textInput]}
              value={region}
              setValue={setRegion}
            />
          </View>
          <View style={[styles.textView]}>
            <Text
              style={[styles.text]}>
              직업
            </Text>
            <TextInput
              placeholder="job"
              defaultValue={job}
              style={[styles.textInput]}
              value={job}
              setValue={setJob}
            />
          </View>
          <View style={[styles.textView]}>
            <Text
              style={[styles.text]}>
              MBTI
            </Text>
            <TextInput
              placeholder="mbti"
              defaultValue={mbti}
              style={[styles.textInput]}
              value={mbti}
              setValue={setMbti}
            />
          </View>
          <View style={[styles.textView]}>
            <Text
              style={[styles.text]}>
              전화번호
            </Text>
            <TextInput
              placeholder="phoneNum"
              defaultValue={phoneNum}
              style={[styles.textInput]}
              value={phoneNum}
              setValue={setPhoneNum}
            />
          </View>


        </View>
        <CustomButton text="수정" onPress={onSignInPressed} />

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
    text :{
        fontSize:18,
        opacity:1.7,
        padding:5
    },
    textInput:{
        padding:5,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#CDCDCD',
    },
    textView:{
        marginTop:5
    }
  });
export default MyPageEdit;