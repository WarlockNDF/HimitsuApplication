import {
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import http from "../service/http";
import React, { useState, useRef, useEffect } from "react";
import { userContext } from "../context/UserProvider";
import { VStack, FormControl, Input, Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async() => ({
    shouldPlaySound:true,
    shouldSetBadge:false,
    shouldShowAlert:true
  })
})

async function welcomeNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title:"We Are Himitsu",
      body: "EIEI",
      data: { data : "World"}
    },
    trigger: {seconds:2}
  })
}

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const userStore = React.useContext(userContext);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSignIn = async () => {
    if (!username || !password) {
      alert("กรุณากรอกข้อมูลให้ครบด้วยครับ");
      return;
    }
    setLoading(!loading);
    await http
      .post("user/auth", { username: username, password: password })
      .then(async (res) => {
        console.log(res.data.accessToken);
        if (res.status != 201) throw "UnAuthorize Exception";
        await AsyncStorage.setItem("@Token", res.data.accessToken);
        await userStore.updateProfile();
        resetInput();
        navigation.navigate("Landing");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        alert("fail to authen");
      });
  };

  useEffect( async() => {
    await welcomeNotification();
    Notifications.addNotificationReceivedListener( notification => {
      console.log(notification.request.content.data.data);
    })
  },[])

  function resetInput(){
    setLoading(false);
    setUsername("");
    SetPassword("");
    usernameInputRef.current.clear();
    passwordInputRef.current.clear();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../assets/logo/himitsu_logo.png")}
          />
          <VStack space={3} mt="5" p={15}>
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                ref={usernameInputRef}
                onSubmitEditing={() => {
                  passwordInputRef.current.focus();
                }}
                onChangeText={(value) => setUsername(value)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                ref={passwordInputRef}
                onSubmitEditing={() => handleSignIn()}
                onChangeText={(value) => SetPassword(value)}
                type="password"
              />
            </FormControl>
            <Button
              isLoading={loading}
              _loading={{
                bg: "primary.300",
                _text: {
                  color: "black",
                },
              }}
              isLoadingText="กำลังเข้าสู่ระบบ"
              mt="2"
              onPress={() => handleSignIn()}
            >
              Sign in
            </Button>
          </VStack>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    color: "black",
    marginBottom: 5,
    textAlign: "left",
  },
  pressableText: {
    fontSize: 20,
    marginTop: 10,
    paddingTop: 7,
    paddingLeft: 7,
    color: "#FFFF",
    marginBottom: 5,
    paddingRight: 7,
    paddingBottom: 7,
    textAlign: "center",
  },
  inputStyle: {
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: "#4B84F1",
  },
  logoImage: {
    width: 380,
    height: 200,
    marginLeft: 10,
    resizeMode: "center",
  },
  wrapperCustom: {
    marginTop: 10,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
