import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import StoriImg from '../images/img2.jpeg';
import ProfleImg from '../images/img3.jpeg';
import { StoryData } from '../data/StoryData';


const FriendStories = () => {
  return (
    <>
    {
        StoryData.map(item=>(
            <View key={item.id} style={styles.friendStoriesContainer}>
        <Image source={item.storyimg} style={styles.storiImg} />
        <View style={styles.profileImgContainer}>
        <Image source={item.profleImg} style={styles.profileImg} />
        </View>
        <View style={styles.friendNmaContainer}>
            <Text style={styles.friendNma}>{item.name}</Text>
        </View>
    </View>
        ))
    }
    
    </>
  );
};

export default FriendStories;

const styles = StyleSheet.create({
    storiImg:{
        height:185,
        width:110,
        borderRadius:10,
    },
    friendStoriesContainer:{
        borderWidth:1,
        borderColor:'lightgray',
        borderRadius:10,
        margin: 5,

    },
    profileImg:{
        height:32,
        width:32,
        borderRadius:50,
    },
    profileImgContainer:{
        position:'absolute',
        top:5,
        left:5,
        borderWidth:2,
        borderColor:'#1877F2',
        borderRadius:50,
        height:42,
        width:42,
        justifyContent:"center",
        alignItems:"center",  
    },
    friendNmaContainer:{
        position:'absolute',
        left:5,
        bottom:5,
    },
    friendNma:{
        color:"white",
        fontSize:15,
    },
})