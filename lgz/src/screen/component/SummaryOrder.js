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
import { HStack, ScrollView, Spacer, VStack } from "native-base";

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

  const test = [1001, 20];

  const createOrder = async () => {
    let createData = [];
    cart.datas.forEach((data) => {
      createData.push({
        productId: data.productID,
        quantity: data.Quantity,
      });
    });
    console.log(createData);
    await http
      .post("order", createData)
      .then(async (res) => {
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((err) => {
        console.error(err);
        alert("Can't Create Order!!");
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 2 }}>
      <View style={{ margin: 10, alignItems: "center" }}>
        <Text
          style={{
            marginTop: 5,
            fontSize: 24,
            fontWeight: "bold",
            height: 32,
            color: "#0294fe",
          }}
        >
          LIST PRODUCTS IN CART
        </Text>
      </View>
      <View style={styles.container}>
        <HStack mt={"2"}>
          <View>
            <Text style={{ fontSize: 23, marginLeft: 10, fontWeight: "bold" }}>
              Product
            </Text>
          </View>
          <Spacer />
          <View>
            <Text style={{ fontSize: 23, marginRight: 12, fontWeight: "bold" }}>
              Piece
            </Text>
          </View>
        </HStack>

        <VStack>
          <View style={{ height: 360 }}>
            {products.map((product) => {
              return (
                <>
                  <HStack>
                    <Text style={{ fontSize: 18, marginLeft: 10 }}>
                      {product.ProductName + " "}
                    </Text>
                    <Spacer />
                    <View>
                      <Text style={{ fontSize: 18, marginRight: 15 }}>
                        {`${cartAction.getCurrentCount(product.ProductID)}`}
                      </Text>
                    </View>
                  </HStack>
                </>
              );
            })}
          </View>
          <Spacer />
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                createOrder();
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                SUBMIT ORDER
              </Text>
            </TouchableOpacity>
          </View>
        </VStack>
      </View>
    </SafeAreaView>
  );
};

export default SummaryOrder;
const styles = StyleSheet.create({
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
  container: {
    height: 480,
    marginLeft: 20,
    borderWidth: 2,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "#FDFEFE",
  },
});
