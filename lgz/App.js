import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box, Center } from "native-base";
import UserProvider from './src/context/UserProvider';
import Login from './src/screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from './src/screen/component/DashBoard';


let Stack = createStackNavigator();


export default function App() {
  return (
    <NativeBaseProvider >
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator
          initialRouteName='LoginScreen'
          >
            <Stack.Screen
            options={{headerShown: false}}
            name="LoginScreen"
            component={Login}
            />
            <Stack.Screen
            options={{headerShown: false,  gestureEnabled:false}}
            name="Landing"
            component={DashBoard}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
