import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screen/LoginScreen";
import RegisterScreen from '../Screen/RegisterScreen'
import Main from "../Screen/Main";
export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen name="Register" options={{headerShown:false}} component={RegisterScreen} />
        <Stack.Screen name="Main" options={{headerShown:false}} component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
