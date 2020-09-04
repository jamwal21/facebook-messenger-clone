import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const MessageInput = ({input,setInput,addMessage}) => {
    return (
      <View style={styles.messageInputContainer}>
        <TextInput 
        style={styles.message__input} 
        placeholder="Enter your message..."
        value={input}
        onChangeText={(msg)=>setInput(msg)} />
        <TouchableOpacity  style={styles.message__button} disabled={!input} onPress={addMessage}>
          <Ionicons name="md-send" size={30} color={input ? "#0b81ff" : "grey"} />
        </TouchableOpacity>
      </View>
    )
}

const styles=StyleSheet.create({
    messageInputContainer:{
        width:'100%',
        height:60,
        backgroundColor:'#F0F8FF',
        position:'absolute',
        bottom:0,
        display:'flex',
        flexDirection:'row',
      },
      message__input:{
        flex:1,borderBottomWidth:2,borderBottomColor: '#0b81ff',marginBottom:2,paddingLeft:10
      },
      message__button:{
        alignSelf:'center',
        margin:5,
      },
})

export default MessageInput
