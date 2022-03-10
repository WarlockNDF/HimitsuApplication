import Login from "./src/screen/Login";
import Landing from "./src/screen/Landing";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserProvider from "./src/context/UserProvider";
import { NativeBaseProvider, Box, Center } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

let Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
              options={{ headerShown: false }}
              name="LoginScreen"
              component={Login}
            />
            <Stack.Screen
              options={{ headerShown: false, gestureEnabled: false }}
              name="Landing"
              component={Landing}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
