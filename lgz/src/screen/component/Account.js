import React from "react";
import { Button } from "native-base";
import { StyleSheet, Text, View } from "react-native";

const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        <Text> test log out</Text>
      </Button>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
