import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "react-native-vector-icons";
import Logo from "../images/logo.png";
import MetaLogo from "../images/meta-logo.png";
import { useNavigation } from "@react-navigation/native";




const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const nav = useNavigation();

  const onCreateAccount = () => {
    nav.navigate('RegisterScreen');
  };

  const onLoginButton = () => {
    nav.navigate('MainScreen');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={Logo} style={styles.logostyle} />
        <TextInput
          placeholder="Mobile Number or email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          style={styles.textBox}
        />
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
          style={styles.textBox}
        />
        <TouchableOpacity style={styles.loginButton} onPress={onLoginButton}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
        <TouchableOpacity style={styles.newAccount} onPress={onCreateAccount} >
          <Text style={styles.newAccountText}>Create new account</Text>
        </TouchableOpacity>
        <Image source={MetaLogo} style={styles.metaLogo} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  logostyle: {
    height: 50,
    width: 50,
    marginVertical: "20%",
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    borderRadius: 12,
    width: "95%",
    marginTop: 12,
  },
  loginButton: {
    backgroundColor: "#1877F2",
    padding: 10,
    borderRadius: 20,
    width: "95%",
    alignItems: "center",
    marginTop: 12,
  },
  loginText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  forgotPassword: {
    color: "gray",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 15,
  },
  newAccount: {
    borderColor: "#1877F2",
    borderWidth: 1,
    padding: 10,
    borderRadius: 18,
    width: "95%",
    alignItems: "center",
    marginTop: "35%",
  },
  newAccountText: {
    color: "#1877F2",
    fontSize: 14,
    fontWeight: "400",
  },
  metaLogo: {
    height: 15,
    width: 70,
    marginTop: 15,
  },
});
export default LoginScreen;
