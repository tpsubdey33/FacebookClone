import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import Like from "../images/like.jpeg";
import Shock from "../images/shock.jpeg";
import Heart from "../images/heart.jpeg";
import { AntDesign, Ionicons } from 'react-native-vector-icons';

const PostFooter = ( {data}  ) => {
  return (
    <View style={styles.postfooterContainer}>
      <View style={styles.footerreactionSce}>
        <View style={styles.row}>
          <Image source={Like} style={styles.reactionIcon} />
          <Image source={Shock} style={styles.reactionIcon} />
          <Image source={Heart} style={styles.reactionIcon} />
          <Text style={styles.reactionCount}>{data.reaction}</Text>
        </View>
        <Text>{data.comments} comments</Text>
      </View>
      <View style={styles.userActionSec}>
        <View style={styles.row}>
        <AntDesign name='like2' size={25} color='#5A5A5A' />
        <Text style={styles.reactionCount}>Like</Text>
        </View>
        <View style={styles.row}>
            <Ionicons name='chatbox-outline' size={25} color='#5A5A5A' />
            <Text style={styles.reactionCount}>Comment</Text>
        </View>
        <View style={styles.row}>
        <Ionicons name='arrow-redo-outline' size={25} color='#5A5A5A' />
        <Text style={styles.reactionCount}>Shre</Text>
        </View>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  reactionIcon: {
    height: 20,
    width: 20,
  },
  postfooterContainer: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems:"center",
  },
  reactionCount: {
    color: "gray",
    fontSize: 14,
    paddingLeft: 5,
  },
  footerreactionSce:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderBottomWidth:1,
    borderBottomColor:"lightgray",
    paddingBottom:15,
  },
  userActionSec:{
    marginTop:15,
    marginBottom:5,
    flexDirection:"row",
    justifyContent:"space-around",
    
  },
});
