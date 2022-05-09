import React, { Component } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

const arr = new Array();
axios.get( 'https://jeeolzzps5.execute-api.us-east-1.amazonaws.com/dev/v1/api/user/apikeys',
{ 
    headers: { 
        'Content-type': 'application/json', 
        'Accept': 'application/json',
        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTgsImVtYWlsIjoic2V5amVvbmdAd2l6YmFzZS5jby5rciIsIm5hbWUiOm51bGwsInBob25lX251bWJlciI6bnVsbCwicHJvZmlsZV9pbWciOm51bGwsInNuc190eXBlIjpudWxsfQ.XxSOOUbtGOjYLd4mzrct0fP4XLrBcR2zBjRyxDDeluQ"
    } 
} ) 
.then((response) => {
    // console.warn(response.data);
    var jsontext = response.data; 
	//for문을 돌면서 contact[i]의 값을 출력한다. 	
	for (var i = 0; i < jsontext.length; i++) { 	
        // var contact = JSON.parse(jsontext); 
		// console.log(jsontext[i].user_memo); 
        let obj1 = { user_memo:jsontext[i].user_memo }
        arr.push(obj1);	
        // console.warn(arr[i]);	
	} 	
	for (var i = 0; i < arr.length; i++) { 	
        console.warn(arr[i]);	
	} 	
	
	// //JSON.parse를 이용해 jsontext를 파싱해 contact 변수에 넣어준다. 	
	
}) 
// .catch((response) => {
//     console.warn(response);
// });
// console.warn(arr);
class Body extends Component {

    state = arr;

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.map(data => (
                        <View style={styles.todo}>
                            <View style={styles.todoText}>
                                <TouchableOpacity style={styles.todoCheckbox}>
                                    {/* {
                                        data.completed
                                        ? <MaterialCommunityIcons size={20} name='checkbox-marked-circle-outline' />
                                        : <MaterialCommunityIcons size={20} name='checkbox-blank-circle-outline' />
                                    } */}
                                </TouchableOpacity>
                                <Text>{data.user_memo}</Text>
                            </View>
                            <TouchableOpacity>
                                <MaterialCommunityIcons style={styles.todoDelBtn} size={30} name='delete-outline' />
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
    },
    todo: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        height: 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    todoCheckbox: {
        marginRight: 5,
    },
    todoText: {
        flexDirection: 'row',
    },
    todoDelBtn: {
        color: '#777'
    }
});

export default Body;