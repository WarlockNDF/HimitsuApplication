import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
  Select,
  ScrollView,
} from "native-base";
import http from "../../service/http";
import StatusCard from "../element/StatusCard";

const Status = ({ navigation }) => {
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
  }, [{ navigation }]);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", flex: 1, alignItems: "center" }}
    >
      <VStack style={{ flex: 1 }}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
            STATUS
          </Text>
        </View>
      </VStack>

      <View style={{ flex: 9 }}>
        <ScrollView>
          {orders.map((orderdata, index) => {
            const { OrderID, Status, OrderDate } = orderdata;
            return (
              <>
                <StatusCard
                  key={OrderID + index}
                  navigation={navigation}
                  orderID={OrderID}
                  orderDate={OrderDate}
                  status={Status}
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
  },
});
