import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { authentication } from "../../service/axiosService";

const LoginPage = ({navigation}) => {

  const [username,setUsername] = useState("");
  const [password,SetPassword] = useState("");
  const [isLogingIn,setIsLogingIn] = useState(false);
  const [user,setUser] = useState();

  const handleSignIn = async () =>{
      /*await authentication({username:username, password:password}).then(res => {
      console.log(res)
      if(res.status != 200) return
      setUser(res.data)
      alert("success")
      navigation.navigate("MainScreen");
    }).catch(err => {
      console.error(err)
      alert("fail to authen") 
    })  */
    navigation.navigate("MainScreen"); 
  } 

  const handleSignUp = () => {
    // registerService(username,password);
  }

  const handleForgetPassword = () =>{
    navigation.navigate("ForgetPassScreen");
    // forgetPasswordService(username);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
      <View style={{ padding: 15 }}>
            <Image
        style={styles.logoImage}
        source={require("../../assets/logo/himitsu_logo.png")}
      />
      <Text style={styles.text}>Username</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => SetPassword(text)}
      />
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
          handleSignIn();
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "red" : "#4B84F1",
          },
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.pressableText}>LOGIN</Text>
      </Pressable>
      {/*  Forget Password And Help */}
      <Text style={{ marginTop: 13 }}>
        Can't Login?
        <Text
          onPress={() => {
            alert("HELP");
          }}
          style={{ color: "#4B84F1" }}
        >
          &nbsp; Help
        </Text>
      </Text>
      <Text
        onPress={() => {
          handleForgetPassword();
        }}
        style={{ marginTop: 10, color: "#4B84F1" }}
      >
        Forget Password
      </Text>
    </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  text: {
    textAlign: "left",
    marginBottom: 5,
    color: "black",
  },
  pressableText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
    color: "#FFFF",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 7,
    paddingRight: 7,
    marginTop:10
  },
  inputStyle: {
    borderColor: "#4B84F1",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    marginTop:10
  },
  logoImage: {
    resizeMode: "center",
    width: 380,
    height: 200,
    marginLeft: 10,
    marginBottom: 50,
    marginTop: 75
  },
  wrapperCustom: {
    borderRadius: 8,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});




