import React, { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../../components/CustomButton';
const styles = StyleSheet.create({
    root: {
        flex:1,
        alignItems:'center',
        padding: 20,
        backgroundColor:"#fff"
    },
    pointTxt:{
        padding: 5,
        fontSize:36,
        color:'orange',
        fontWeight:'600',
        
    },
    plainTxt: {
        padding: 5,
        fontSize:36,
        fontWeight:'600',

    },
    area01: {
        flex:1
    },
    area02: {
        flex:2
    },
    area03: {
        flex:1
    }
  });

export default function SignUpScreen_img({route}) {
    const authKey = route.params.authkey;
    const navigation = useNavigation();

    const [image, setImage] = useState(null);

    const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

    const onSignInPressed = () => {
        navigation.navigate('Home', { authkey: authKey }); 

    }
  return (
    <View style={styles.root}>
        <View style={styles.area01}>
            <Text style={[styles.plainTxt]}>본인의 매력을</Text>
            <Text style={[styles.plainTxt]}>나타낼 수 있는 사진을 </Text>
            <Text style={[styles.plainTxt]}>올려주세요 </Text>
        </View>
        <View style={styles.area02}>
            <Button title="사진 선택" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 250, height: 250, borderRadius:30 }} />}
        </View>
        <CustomButton text="작당모임 참여하러 가기" onPress={onSignInPressed} />
    </View>
  );
}

