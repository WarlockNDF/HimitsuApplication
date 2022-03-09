import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box, Center } from "native-base";
import UserProvider from './src/context/UserProvider';
import Login from './src/screen/Login';



export default function App() {
  return (
    <NativeBaseProvider >
      <UserProvider>
        <View style={styles.container}>
          <Login />
        </View>
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
