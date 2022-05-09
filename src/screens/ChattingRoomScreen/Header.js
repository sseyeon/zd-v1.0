import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
class Header extends Component {
    state = {
        newTodo: '',
    }
    addNewTodo = () => {
        if(this.state.newTodo) {
            // get 선언 이유: 데이터확인용. 개발 완료 후 제거
            axios.get( 'https://jeeolzzps5.execute-api.us-east-1.amazonaws.com/dev/v1/api/user/me', 
            { 
                headers: { 
                    'Content-type': 'application/json', 
                    'Accept': 'application/json',
                    'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTgsImVtYWlsIjoic2V5amVvbmdAd2l6YmFzZS5jby5rciIsIm5hbWUiOm51bGwsInBob25lX251bWJlciI6bnVsbCwicHJvZmlsZV9pbWciOm51bGwsInNuc190eXBlIjpudWxsfQ.XxSOOUbtGOjYLd4mzrct0fP4XLrBcR2zBjRyxDDeluQ"
                } 
            } ) 
            .then((response) => {
                console.warn(response);
            }) 
            .catch((response) => {
                console.warn(response);
            });
            
            axios.post( 'https://jeeolzzps5.execute-api.us-east-1.amazonaws.com/dev/v1/api/user/apikeys', 
                { 
                    user_memo: this.state.newTodo, 
                    status: "active" 
                }, 
                { 
                    headers: { 
                        'Content-type': 'application/json', 
                        'Accept': 'application/json',
                        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTgsImVtYWlsIjoic2V5amVvbmdAd2l6YmFzZS5jby5rciIsIm5hbWUiOm51bGwsInBob25lX251bWJlciI6bnVsbCwicHJvZmlsZV9pbWciOm51bGwsInNuc190eXBlIjpudWxsfQ.XxSOOUbtGOjYLd4mzrct0fP4XLrBcR2zBjRyxDDeluQ"
                    } 
                } ) 
                .then((response) => {
                    console.warn(response);
                    // navigation.navigate('Home', { authkey: response.data.Authorization }); 
                }) 
            this.setState({
                newTodo: ''
            });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.input}> 
                    <TextInput 
                        style={styles.inputText}
                        placeholder='채팅방 추가'
                        autoCorrect={ false }
                        value={this.state.newTodo}
                        onChangeText={(newTodo) => this.setState({newTodo})}
                    />
                    <TouchableOpacity onPressOut={this.addNewTodo}>
                    <MaterialCommunityIcons style={styles.addBtn} size={30} name='plus-circle' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    inputText: {
        flex: 1,
    },
    addBtn: {
        color: '#4169E1'
    }
});

export default Header;