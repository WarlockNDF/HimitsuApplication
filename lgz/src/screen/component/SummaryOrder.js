import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartProvider";
import http from "../../service/http";
import { userContext } from "../../context/UserProvider";

const SummaryOrder = ({ navigation }) => {
  const userStore = React.useContext(userContext);
  const { cart, cartAction } = useCartContext([]);
  const [products, setProducts] = useState([]);
  const productID = [];
  const dataPost = [];

  const loopData = () => {
    cart.datas.forEach((context) => {
      productID.push(context.productID);
    });
  };

  //GET ARRAY LIST PRODUCT by ID
  const getProduct = async () => {
    try {
      let body = { ids: productID };
      const { status, data } = await http.post("product/ids", body);
      if (status !== 200) throw "No Such Product";
      console.log(data.data);
      setProducts(data.data);
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  useEffect(async () => {
    loopData();
    getProduct();
  }, []);

  const test = [1001,20]

  const createOrder = async () => {
    let createData = []
    cart.datas.forEach((data) => {
      createData.push({
        productId : data.productID,
        quantity: data.Quantity
      })
    })
    console.log(createData);
    await http.post("order", createData).then(async (res)=> {
      console.log(res.data)
      alert(res.data.message)
    }).catch((err) => {
      console.error(err);
      alert("Can't Create Order!!")
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          LIST PRODUCTS IN CART
        </Text>
      </View>
      <View>
        {products.map((product) => {
          return (
            <>
              <Text>
                {product.ProductName + " " + `${cartAction.getCurrentCount(product.ProductID)}`}
              </Text>
            </>
          );
        })}
      </View>

      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
           createOrder()
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>SUBMIT ORDER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SummaryOrder;
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
});
