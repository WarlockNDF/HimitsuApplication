import { View, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartProvider";
import http from "../../service/http";
import { userContext } from "../../context/UserProvider";

const SummaryOrder = ({ navigation }) => {
  const userStore = React.useContext(userContext);
  const { cart, cartAction } = useCartContext([]);
  const [ products, setProducts ] = useState([]);
  const productID = [];
  const productQty = [];
  const UserID = userStore.profile.Id

  const loopData = () => {
    for (let i = 0; i < cart.datas.length; i++) {
      productID.push(cart.datas[i].productID);
      productQty.push(cart.datas[i].Quantity);
    }
  };
  
  //GET ARRAY LIST PRODUCT by ID
  const getProduct = async () => {
    try {
      console.log({ids: productID})
      const { status, data } = await http.get('product/ids', {ids: productID}, {header: {
        "Content-Type": "application/json"}})
      if (status !== 200) throw "No Such Product"
      console.log(data.data);
      setProducts(data.data);
    } catch (err) {
      alert(err.message)
      console.error(err.message);
    }
  }

  useEffect(() => {
    loopData();
    getProduct();
  }, [])

  // const createOrder = async () => {
  //   await http.post("order", {Id: UserID}).then(async (res)=> {
  //     consolse.log(res.data)
  //   }).catch((err) => {
  //     console.error(err);
  //     alert("Can't Create Order!!")
  //   })
  // }


  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center"}}>
      <View>
        {alert(productQty + ":" + productID)}
      </View>

      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          LIST PRODUCTS IN CART
        </Text>
      </View>

      <View>
        <Text>{UserID}</Text>
      </View>

    </SafeAreaView>
  );
};

export default SummaryOrder;
