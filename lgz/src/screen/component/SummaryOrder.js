import { View, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartProvider";
import http from "../../service/http";


const SummaryOrder = ({ navigation }) => {
  const { cart, cartAction } = useCartContext([]);
  const ID = [];
  const Qty = [];

  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const { status, data } = await http.get("product");
      if (status !== 200) throw "No Such Product";
      console.log(data.data);
      setProducts(data.data);
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);


  const loopData = () => {
    for (let i = 0; i < cart.datas.length; i++) {
      ID.push(cart.datas[i].productID);
      Qty.push(cart.datas[i].Quantity);
    }
  };



  return (
    <SafeAreaView>
      <View>
        {loopData()}
        {alert(Qty + ":" + ID)}
      </View>


    </SafeAreaView>
  );
};

export default SummaryOrder;
