import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Profile from '../images/img1.jpeg';
import { FontAwesome, FontAwesome5 } from 'react-native-vector-icons';

const PostSubHeader = () => {
  return (
    <View style={styles.mainRow}>
    <Image source={Profile} style={styles.ProfilePhoto} />
    <View>     
    <Text style={styles.profileName}>Jhon smith</Text>
    <View style={styles.subRow}>
    <FontAwesome name='globe' size={20} color='gray' />
    <Text style={styles.publicText}>Public</Text>
    <FontAwesome5 name='caret-down' size={20} color='gray' />
    </View>
    </View> 
    </View>
  )
}

export default PostSubHeader

const styles = StyleSheet.create({
    ProfilePhoto:{
        height:65,
        width:65,
        borderWidth:1,
        borderRadius:50,
    },
    mainRow:{
        flexDirection:"row",
        padding:15,
        backgroundColor:"#FFFFFF"
    },  
    profileName:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:15
    },
    subRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:1,
        padding:5,
        borderRadius:5,
        marginLeft:15,
        marginTop:4
    },
    publicText:{
        color:'gray',
        fontSize:16,
    },
})