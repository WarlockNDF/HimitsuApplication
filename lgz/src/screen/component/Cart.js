import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";

const Cart = ({ navigation, route }) => {
  const { productname, supplierName } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", margin: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{productname}</Text>
        <Text style={{ fontSize: 16 }}>{supplierName}</Text>
      </View>
      <View>
        <NumericInput onChange={value => setQuantity(value)}/>
        {console.log(quantity)}
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => alert("eiei")}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>ADD TO CART</Text>
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
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#f1c232",
  },
});
