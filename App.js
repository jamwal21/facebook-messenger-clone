import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, Button, FlatList } from 'react-native';
import Header from './src/components/Header';
import MessageInput from './src/components/MessageInput';
import db from './firebase';
import firebase from 'firebase'
import Message from './src/components/Message';

export default function App() {
  const [modal, setModal] = useState(false);
  const [usernameActual, setUsernameActual] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    setUsernameActual('')
    setModal(true)
  },[])

  useEffect(()=>{
    db.collection('messages-rn').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id: doc.id,message: doc.data()})))
    })
  },[])

  const addMessage = ()=>{
    db.collection('messages-rn').add({
      username: usernameActual,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  const renderMessages = ({item})=>(
    <Message username={usernameActual} message={item.message} />
  )

  return (
    <>
      <Modal animationType="fade" visible={modal} transparent  >
        <View style={styles.modal}>
          <TextInput 
          style={styles.modal__input} 
          placeholder="Enter your name" 
          value={usernameActual}
          onChangeText={(name)=>setUsernameActual(name)} />
          <View style={styles.modal__button}>
            <Button title="Submit" onPress={()=>setModal(false)} />
          </View>
        </View>
      </Modal>
      <Header title="Facebook Messenger Clone" />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome {usernameActual}! </Text>
          <FlatList style={{marginBottom:60,width:'100%'}}
          data={messages}
          renderItem={renderMessages} />
        <MessageInput input={input} setInput={(msg)=>setInput(msg)} addMessage={addMessage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modal:{
    width:'100%',
    height:200,
    backgroundColor:'#e9e9eb',
    marginTop:'55%',
    borderWidth:2,
    borderColor: '#0b81ff',
    justifyContent:'center',
    alignItems:'center',
    elevation:8
  },
  modal__input:{
    width:'80%',
    height:'30%',
    borderBottomWidth:1,
    borderBottomColor: '#0b81ff',
    paddingLeft:10,
    fontSize:20,
  },
  modal__button:{
    marginTop:10,
    width:'30%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcomeText:{
    fontSize:20
  },
  
});
