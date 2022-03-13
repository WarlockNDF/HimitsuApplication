import { StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Select, ScrollView } from "native-base";
import http from "../../service/http";
import StatusCard from "../element/StatusCard";

const Status = () => {
  const [orders, setOrders] = useState([]);

  const getOrder = async () => {
    try {
      const { status, data } = await http.get("order");
      if (status !== 200) throw "No Order";
      console.log(data.data);
      setOrders(data.data);
    } catch (err) {
      alert(err.data.message);
      console.error(err.message);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <SafeAreaView >
      <View style={{ alignItems: "center" }}>
        <ScrollView>
          {orders.map((orderdata, index) => {
            const { order, Quantity, product } = orderdata;
            return (
              <>
                <StatusCard
                  key={order.OrderID + index}
                  order={order.OrderID}
                  product={product.ProductName}
                  quantity={Quantity}
                />
              </>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
