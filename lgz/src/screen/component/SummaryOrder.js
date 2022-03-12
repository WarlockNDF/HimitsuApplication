import { View, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartProvider";
import http from "../../service/http";


const SummaryOrder = ({ navigation }) => {
  const { cart, cartAction } = useCartContext([]);
  const ID = [];
  const Qty = [];

  const [products, setProducts] = useState([]);


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
