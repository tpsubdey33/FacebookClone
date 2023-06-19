import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Profile from "../images/img1.jpeg";
import CameraRoll from "../images/cameraroll.png";
import { useNavigation } from "@react-navigation/native";


const SubHeader = () => {

  const nav = useNavigation();

  const onNewPost =() =>{
    nav.navigate('NewPost');
  }
  return (
    <View style={styles.container}>
      <Image source={Profile} style={styles.profileStyle} />
      <TouchableOpacity style={styles.inputBox} onPress={onNewPost} >
        <Text style={styles.inputSty}>Write something here...</Text>
        <Text style={styles.inputSty}>এখানে কিছু লিখুন.....</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={CameraRoll} style={styles.cameraRoll} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 18,
    alignItems: "center",
  },
  profileStyle: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: "70%",
    height: 60,
  },
  inputSty: {
    fontSize: 16,
    color: "black",
  },
});

export default SubHeader;
