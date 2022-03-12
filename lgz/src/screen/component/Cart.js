import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Modal,
  Pressable,
  Right,
  Left,
} from "react-native";
import React, { useState, useEffect, Component } from "react";
import NumericInput from "react-native-numeric-input";
import { useCartContext } from "../../context/CartProvider";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const Cart = ({ navigation, route }) => {
  const { productid, productname, supplierName } = route.params;
  const [quantity, setQuantity] = useState(1);
  const { cart, cartAction } = useCartContext();

  const IconHeaderButton = (props) => (
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
  );

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
          <Item
            title="CART"
            iconName="cart-sharp"
            onPress={() => {
              navigation.navigate("summary");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [cart]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", margin: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {productid}:{productname}
        </Text>
        <Text style={{ fontSize: 16 }}>{supplierName}</Text>
      </View>
      <View>
        <NumericInput onChange={(value) => setQuantity(value)} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            cartAction.addToCart({ productID: productid, Quantity: quantity });
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            cartAction.clearCart();
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>CLEAR CART</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    marginTop: 20,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#f1c232",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
