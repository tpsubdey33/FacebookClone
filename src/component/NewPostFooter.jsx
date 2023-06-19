import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import Cameraroll from '../images/cameraroll.png';
import { FontAwesome5, Fontisto, Entypo  } from 'react-native-vector-icons';


const NewPostFooter = () => {
  return (
    <View style={styles.container}>
        <Image source={Cameraroll} style={styles.imageStyle} />
        <FontAwesome5 name='user-tag' size={30} color='blue' />
        <Fontisto name='smiley' size={30} color='#FFA500' />
        <FontAwesome5 name='map-marker-alt' size={30} color='#A52A2A' />
        <Entypo name='dots-three-horizontal' size={30} />
    </View>
  )
}

export default NewPostFooter

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        flexDirection:"row",
        justifyContent:"space-around",
        borderBottomWidth:1,
        borderBottomColor:"lightgray",
        borderTopWidth:1,
        borderBottomColor:"lightgray",
        paddingBottom:10,
        paddingTop:10
    },
    imageStyle:{
        height:30,
        width:30,
    },
})