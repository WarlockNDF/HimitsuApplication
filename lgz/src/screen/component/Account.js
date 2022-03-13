import {
  Pressable,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Text, Button, Center } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCartContext } from "../../context/CartProvider";
import { userContext } from "../../context/UserProvider";

const Account = ({ navigation }) => {

  const { cart, cartAction } = useCartContext();
  const userStore = React.useContext(userContext);


  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />
      <View style={styles.body}>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Text style={styles.name}>{userStore.profile.username}</Text>
          {
            userStore.profile.userDetail && (
              <>
                <Text style={styles.info}>{`${userStore.profile.userDetail.firstname} ${userStore.profile.userDetail.lastname}`}</Text>
                <Text style={styles.description}>
                  {`
                Store Name : ${userStore.profile.userDetail.storeName} \n
                Location : ${userStore.profile.userDetail.location}\n
                Contact Number : ${userStore.profile.userDetail.phoneNumber}\n
                Contact Email : ${userStore.profile.userDetail.email}
                `}
                </Text>
              </>
            )
          }
          <View style={styles.bodyContent}>
            <TouchableOpacity style={styles.buttonContainer} onPress={ () => {
              navigation.navigate('LoginScreen');
              }}>
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6495ED",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 30,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#6495ED",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "left",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
