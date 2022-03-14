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
    <SafeAreaView style={styles.container}>
      <View>
          <View style={{ margin: 10, alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", height: 50 }}>
              LIST PRODUCTS IN CART
            </Text>
          </View>

          <HStack>
          <View>
          <Text style={{ fontSize: 20, marginLeft: 10 }}>Product</Text>
          </View>

          <View>
          <Text style={{ fontSize: 20, marginLeft : 60 }}>Piece</Text>
          </View>
          </HStack>
          
          <VStack>
          <View style={{ height: 315 }}>
            {products.map((product) => {
              return (
                <>
                  <HStack>
                    <Text style={{ fontSize: 20, marginLeft: 10 }}>
                      {product.ProductName + " "}
                    </Text>
                    <Spacer />
                    <View>
                      <Text style={{ fontSize: 20, marginRight: 15 }}>
                        {`${cartAction.getCurrentCount(product.ProductID)}`}
                      </Text>
                    </View>
                  </HStack>
                </>
              );
            })}
          </View>
          <Spacer />
      <View style={{ alignItems: "center"}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            createOrder();
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>SUBMIT ORDER</Text>
        </TouchableOpacity>
      </View>
      </VStack>
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
  container: {
    height: 500,
    marginTop: 23,
    marginLeft: 20,
    borderWidth: 2,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "#FDFEFE",
  },
});
