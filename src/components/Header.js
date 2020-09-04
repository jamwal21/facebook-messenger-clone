import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Image source={{uri: "https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png"}} style={{width:60,height:60}} />
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:110,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth: 2,
    borderBottomColor: '#0b81ff'
  },
  headerTitle:{
    color:'black',
    fontSize:24,
    marginTop:5
  }
});


export default Header