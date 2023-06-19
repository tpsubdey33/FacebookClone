import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import UserProfile from "../images/post1.jpeg";
import { Entypo, Ionicons, FontAwesome5 } from "react-native-vector-icons";

const PostHeader = ({data}) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postTopSecotion}>
        <View style={styles.row}>
          <Image source={data.profileImg} style={styles.userProfile} />
          <View style={styles.userSce}>
            <Text style={styles.username}>{data.name}</Text>
            <View style={styles.row}>
              <Text style={styles.days}>{data.date}</Text>
              <Text style={styles.dot}>•</Text>
              <FontAwesome5 name="user-friends" size={15} color="gray" style={styles.userIcon} />
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <Entypo name="dots-three-horizontal" size={25} color="gray" style={styles.headerIcon} />
          <Ionicons name="close" size={25} color="gray" />
        </View>
      </View>
      <Text style={styles.caption}>{data.caption}</Text>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  postContainer: {
    padding: 16,
  },
  userProfile: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
  },
  postTopSecotion: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username:{
    fontSize:16,
    color:'#000000',
    marginBottom:2,
  },
  userSce:{
    marginLeft:12
  },
  days:{
    fontSize:16,
    color:'gray',
  },
  dot:{
    fontSize:15,
    color:'gray',
    paddingHorizontal: 8,
  },
  userIcon:{
    marginTop: 4,
  },
  headerIcon:{
    marginRight:20,

  },
  caption:{
    color:'black',
    fontSize:15,
    marginTop:10, 
  }
});
