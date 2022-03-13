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

  const getQty = (id) => {
    let idx = cart.datas.findIndex(
      (cartProduct) => cartProduct.productID === id
    );
    if (idx === -1) return;
    return cart.datas[idx].Quantity;
  };

  useEffect(async () => {
    loopData();
    getProduct();
  }, []);

  const test = [1001,20]

  const createOrder = async () => {
    await http.post("order", cart.datas).then(async (res)=> {
      consolse.log(res.data)
      console.log({productId: 1001, quantity: 10})
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
                {product.ProductName + " " + `${getQty(product.ProductID)}`}
                {dataPost.push({productId: product.ProductID},{quantity: getQty(product.ProductID)})} 
              </Text>
            </>
          );
        })}
      </View>

      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
           //alert(JSON.stringify(dataPost))
           alert(JSON.stringify(cart.datas))
           //createOrder()
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
