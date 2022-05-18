// 사진 뿌리는 곳
import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Hosi from '../../../assets/images/hosi.jpg';
const BottomTabView = () => {

  let squares = [];
  let img_arr = [
    require('../../../assets/feed_images/1.jpg'),
    require('../../../assets/feed_images/2.jpg'),
    require('../../../assets/feed_images/3.png'),
    require('../../../assets/feed_images/4.jpg'),
    require('../../../assets/feed_images/5.jpg'),
    require('../../../assets/feed_images/6.jpg'),
    require('../../../assets/feed_images/7.jpg'),
    require('../../../assets/feed_images/8.png'),
    require('../../../assets/feed_images/9.jpg'),
    require('../../../assets/feed_images/10.jpg')

  ];
  let numberOfSquare = 7;
  for (let index = 0; index < numberOfSquare; index++) {
    squares.push(
      <View key={index}>
        <Image
        source={img_arr[index]}
        style={{width: 130,
          height: 150,
          marginVertical: 0.5}}
        />
      </View>
    );
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          flexWrap: 'wrap',
          flexDirection: 'row',
          paddingVertical: 5,
          justifyContent: 'space-between',
        }}>
        {squares}
      </View>
    </ScrollView>
  );

};

export default BottomTabView;