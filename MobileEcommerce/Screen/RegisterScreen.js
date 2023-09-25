import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BACKEND_URL } from "@env";

export default function RegisterScreen() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister =async () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    console.log(user)

    // send a POST  request to the backend API to register the user
    await axios
      .post(`${BACKEND_URL}/register`, user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setname("");
        setemail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <>
        <View>
          <Image
            style={{
              width: 150,
              height: 100,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            source={require('./amazon.png')}
          />
        </View>

        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 12,
                color: "#041E42",
              }}
            >
              Register Your Account
            </Text>
          </View>

          <View style={{ marginTop: 30 }}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "#D0D0D0",
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginTop: 30,
                  paddingHorizontal: 5,
                }}
              >
                <AntDesign
                  name="user"
                  style={{ marginLeft: 8 }}
                  size={24}
                  color="gray"
                />
                <TextInput
                  style={{ color: "gray", marginVertical: 10, width: "70%" }}
                  placeholder="User Name"
                  value={name}
                  onChangeText={(e) => setname(e)}
                ></TextInput>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
                paddingHorizontal: 5,
              }}
            >
              <MaterialIcons
                style={{ marginLeft: 8 }}
                name="email"
                size={24}
                color="gray"
              />
              <TextInput
                style={{ color: "gray", marginVertical: 10, width: "70%" }}
                placeholder="nameEmail000@gmail.com"
                value={email}
                onChangeText={(e) => setemail(e)}
              ></TextInput>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "#D0D0D0",
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginTop: 30,
                  paddingHorizontal: 5,
                }}
              >
                <AntDesign
                  name="lock"
                  style={{ marginLeft: 8 }}
                  size={24}
                  color="gray"
                />
                <TextInput
                  secureTextEntry={true}
                  style={{ color: "gray", marginVertical: 10, width: "70%" }}
                  placeholder="Password"
                  value={password}
                  onChangeText={(e) => setPassword(e)}
                ></TextInput>
              </View>
            </View>

            <View
              style={{
                marginTop: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            ></View>

            <Pressable
              onPress={handleRegister}
              style={{
                width: 200,
                backgroundColor: "#FEBE10",
                borderRadius: 6,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 20,
                padding: 15,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Register
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("Login")}
              style={{ marginTop: 15 }}
            >
              <Text
                style={{ textAlign: "center", color: "gray", fontSize: 16 }}
              >
                Allready have an account? Sign in
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
