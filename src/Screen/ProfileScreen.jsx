import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const nav = useNavigation();

  const onLogOutButton = () => {
    nav.navigate("LoginScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <TouchableOpacity style={styles.logoutBut} onPress={onLogOutButton}>
        <Text style={styles.butTitel}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#1877F2",
    fontWeight: "500",
  },
  butTitel: {
    fontSize: 15,
    color: "white",
    fontWeight: "400",
  },
  logoutBut: {
    backgroundColor: "#1877F2",
    padding: 12,
    width: "90%",
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 30,
  },
});

export default ProfileScreen;
