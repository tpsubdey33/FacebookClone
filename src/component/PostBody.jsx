import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const PostBody = () => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
      <TextInput
        placeholder="What's on your mind?"
        placeholderColor="gray"
        style={styles.postTextInput}
      />
      <View style={styles.bengaliText}>
        <Text style={{fontSize:15}}>
            আ
        </Text>
      </View>
      </View>
    </View>
  );
};

export default PostBody;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "74%",
    width: "100%",
  },
  postTextInput: {
    padding: 15,
    fontSize: 20,
    marginRight:10,
  },
  bengaliText:{
    padding:2,
    height:25,
    width:25,
    borderWidth:1,
    borderRadius:5,
    marginRight:10,
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
});
