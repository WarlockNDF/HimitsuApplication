import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Cart = ({ navigation, route }) => {
  const { productname, supplierName } = route.params;

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", margin: 30 }}>
        <Text>{productname}</Text>
        <Text>{supplierName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
