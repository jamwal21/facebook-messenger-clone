import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Message = ({username, message}) => {
    const isUser = username === message.username ;
    return (
        <>
            <Text style={isUser? styles.text__user : styles.text__guest}>
                {!isUser && `${message.username || 'Unknown'}:`} {message.message} 
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    text__guest:{
        fontSize:18,
        borderRadius:5,
        backgroundColor:'#e9e9eb',
        margin:3,
        marginBottom:15,
        width:'80%',
        padding:5,
        elevation:5
    },
    text__user:{
        fontSize:18,
        borderRadius:5,
        backgroundColor:'#0b81ff',
        margin:3,
        marginBottom:15,
        width:'80%',
        padding:5,
        marginLeft:'20%',
        elevation:5
    }
})

export default Message
