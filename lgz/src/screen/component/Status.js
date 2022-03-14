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
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <VStack mt={10} w="100%" h="100%" space={"xs"}>
        <View>
          <Heading ml={5}>STATUS</Heading>
        </View>
        <Center>
          <ScrollView height="xl" marginTop={'10'}>
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
        </Center>
      </VStack>
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
    marginTop: 20,
  },
});
