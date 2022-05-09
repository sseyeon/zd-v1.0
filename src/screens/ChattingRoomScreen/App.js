import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
// import Header from './Header'
// import Body from './Body'
import Header from './Header';
import Body from './Body';
import Hosi from '../../../assets/images/hosi.jpg';

export default class App extends React.Component {
  // state 추가함.
  state = {
    todos: []
  }
  // 할일 추가 함수
  addTodo = (todo) => {
     
    // 새로운 할일(todo) 객체 생성
    const newTodo = {
        id: Date.now(), // 등록시간
        text: todo,      // 할일 내용
        completed: false, // 완료 여부
    }   

    // state 업데이트
    this.setState(prevState => ({
        todos: [
            newTodo,       // 새로 추가된 할일(todo)
            ...prevState.todos // 기존의 할일 목록
        ]
    }));
   
  }
  render() {
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
        <Header addTodo={this.addTodo}/>
        <Body todos={this.state.todos}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    fontSize: 30, 
    marginLeft: 20,
    marginBottom: 20,
  }
});
