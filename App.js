import { StyleSheet, Text, View, StatusBar } from "react-native";
import LoginScreen from "./src/Screen/LoginScreen";
import RegisterScreen from "./src/Screen/RegisterScreen";
import MainScreen from "./src/Screen/MainScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import NewPost from "./src/Screen/NewPost";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
     <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="NewPost" component={NewPost} />
      </Stack.Navigator>
      </NavigationContainer>
      </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
