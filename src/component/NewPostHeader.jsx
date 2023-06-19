import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';

const NewPostHeader = () => {

    const nav = useNavigation();
    const onGoBackMain =() => {
        nav.navigate('MainScreen');
    }

  return (
    <View style={styles.row}>
    <TouchableOpacity onPress={onGoBackMain} >
      <Ionicons name="arrow-back" size={35} color="black"  />
    </TouchableOpacity>
      <Text style={styles.text}>Create post</Text>
      <Text style={styles.texNext}>Next</Text>
    </View>
  )
}

export default NewPostHeader

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"lightgray",
        color:'#FFFFFF',
        backgroundColor:'#FFFFFF',
        padding:15
    },
    text:{
        fontSize:25,
        fontWeight:"600",

    },
    texNext:{
        fontSize:20,
        marginLeft:170,
        color:"gray",

    },
    
})