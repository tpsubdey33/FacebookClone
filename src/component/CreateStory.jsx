import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import Profile from '../images/img1.jpeg';
import {Entypo} from  'react-native-vector-icons';

const CreateStory = () => {
  return (
    <View style={styles.createStoryContainer}>
        <Image source={Profile} style={styles.profileImg} />
        <View style={styles.icoContainer}>
        <Entypo name='circle-with-plus' size={35} color='#1877F2'  />
        </View>
      <Text style={styles.textinput}>Create Story</Text>
    </View>
  )
}

export default CreateStory;

const styles = StyleSheet.create({
    createStoryContainer:{
        borderWidth:1,
        borderColor:"lightgray",
        backgroundColor:"#f5f5f5",
        borderRadius:10,
        alignItems:"center",
        position:'relative',
        paddingBottom:10,
    },
    profileImg:{
        height:110,
        width:110,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    icoContainer:{
        position:"absolute",
        top:"55%",
        backgroundColor:'white',
        borderRadius:50,
    },
    textinput:{
        fontSize:14,
        color:'black',
        textAlign:'center',
        marginTop:25,
        width:"50%",
    }
})