import { StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
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
  HStack,
} from "native-base";
import http from "../../service/http";

const OrderDetail = ({ navigation, route }) => {
  const { ID } = route.params;
  const [orderBasicInfo, setOrderBasicInfo] = useState([]);
  const [orderDetails, setOrderDeatils] = useState([]);
  const [orderTotal, setOrderTotal] = useState([]);

  const getDetail = async () => {
    try {
      const { status, data } = await http.get(`order/${ID}`);
      if (status !== 200) throw "No Order";
      console.log(data.data);
      setOrderBasicInfo(data.data.order);
      setOrderDeatils(data.data.details.products);
      setOrderTotal(data.data.details.orderTotal);
    } catch (err) {
      alert(err.data.message);
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#FFFFFF", flex: 1, alignItems: "center" }}
    >
      <View style={styles.container}>
        <ScrollView>
          <Center>
            <View style={{ margin: 20 }}>
              <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                {orderBasicInfo.OrderDate} : ID = {orderBasicInfo.OrderID}
              </Text>
            </View>
          </Center>
          <View style={styles.line} />

          {orderDetails.map((detail, index) => {
            const {
              ProductID,
              quantity,
              productTotal,
              ProductName,
              UnitPrice,
              productType,
              supplier,
            } = detail;
            return (
              <>
                <View style={{ margin: 10 }}>
                  <Text style={{ fontSize: 18, marginBottom: 5 }}>
                    Product = {ProductName} : {UnitPrice} Baht.
                  </Text>
                  <Text style={{ fontSize: 18, marginBottom: 5 }}>
                    Supplier = {supplier.SupplierName},{"\n"}
                    {supplier.Location} : {supplier.PhoneNumber}
                  </Text>
                  <Text style={{ fontSize: 18, marginBottom: 5 }}>
                    Quantity = {quantity}
                  </Text>
                  <Text style={{ fontSize: 18, marginBottom: 5 }}>
                    Type = {productType.TypeName}
                  </Text>
                  <Text style={{ fontSize: 18, marginBottom: 5 }}>
                    Total = {productTotal} Baht.
                  </Text>
                </View>
                <View style={styles.line} />
              </>
            );
          })}
        </ScrollView>
        <Center>
          <Text
            style={{
              fontSize: 19,
              marginTop: 40,
              color: "red",
              fontWeight: "bold",
            }}
          >
            {orderTotal} BAHT. (SUMMARY)
          </Text>
        </Center>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              alert("confirm order complete");
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Confirm Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetail;

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
    height: 530,
    width: 350,
    marginLeft: 20,
    borderWidth: 2,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "#FDFEFE",
    marginTop: 10,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
});
