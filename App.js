import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LoginPage from "./component/login/LoginPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native";
import ForgetPass from "./component/forgetpassword/ForgetPassword";
import DashBoard from "./component/HomeRoute";


let Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="LoginScreen">
         <Stack.Screen 
          options={{
            headerShown: false
          }} 
          name="LoginScreen" 
          component={LoginPage}/>
          <Stack.Screen 
          options={{
            title:"Forget Password",
          }}
          name="ForgetPassScreen" 
          component={ForgetPass}/>
          <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false
          }} 
          name="MainScreen"
          component={DashBoard}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});