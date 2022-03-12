import {
  Pressable,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Button, Center } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import http from "../../service/http";
import { useCartContext } from "../../context/CartProvider";

const Account = ({ navigation }) => {
  const [UserData, setUserData] = useState([]);
  const { cart, cartAction } = useCartContext();

  const getData = async () => {
    try {
      const { status, data } = await http.get("user");
      if (status !== 200) throw "No data user found";
      console.log(data.data);
      setUserData(data.data);
      console.log(UserData.userDetail);
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />
      <View style={styles.body}>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Text style={styles.name}>{UserData.username}</Text>
          {
            UserData.userDetail && (
              <>
                <Text style={styles.info}>{`${UserData.userDetail.firstname} ${UserData.userDetail.lastname}`}</Text>
                <Text style={styles.description}>
                  {`
                Store Name : ${UserData.userDetail.storeName} \n
                Location : ${UserData.userDetail.location}\n
                Contact Number : ${UserData.userDetail.phoneNumber}\n
                Contact Email : ${UserData.userDetail.email}
                `}
                </Text>
              </>
            )
          }
          <View style={styles.bodyContent}>
            <TouchableOpacity style={styles.buttonContainer} onPress={ () => {
              cartAction.clearCart();
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
