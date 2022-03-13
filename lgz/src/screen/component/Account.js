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
    <SafeAreaView style={{backgroundColor:'#FAFAFA'}}>
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
              <Text style={{fontWeight:'bold' , fontSize:20 , color:'#FFFFFF'}}>LOG OUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FFFFFF"
  }
  ,header: {
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
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor:"#FFFFFF"
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    color: "#000000",
    fontWeight: "600",
  },
  info: {
    fontSize: 20,
    color: "#6495ED",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    textAlign: "left",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 200,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
