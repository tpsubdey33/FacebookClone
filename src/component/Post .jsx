import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import { PostData } from '../data/PostData';


const Post  = () => {
  return (
    <View style={styles.postContainer}>
        {PostData.map(item=>(
            <View key={item.id}>
            <PostHeader data={item}/>
            <Image source={item.postImg} style={styles.postImg} />
            <PostFooter data={item} />
            </View>
        ))}
    </View>
  )
}

export default Post 

const styles = StyleSheet.create({
    postContainer:{
        backgroundColor:"white",
        marginTop:8,
    },
    postImg:{
        width:"100%",
        height:250,
    },
})