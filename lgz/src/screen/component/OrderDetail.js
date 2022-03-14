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
      <View>
        <Text>
          {orderBasicInfo.OrderDate} : {orderBasicInfo.OrderID}
        </Text>
        <Text>{orderTotal} BAHT(SUMMARY)</Text>
        {orderDetails.map((detail, index) => {
          const { ProductID, quantity, productTotal, ProductName, UnitPrice, productType, supplier } =
            detail;
          return (
            <>
              <Text>
                Product = {ProductName} : {UnitPrice} Baht
              </Text>
              <Text>
                Type = {productType.TypeName}
              </Text>
              <Text>
                Supplier = {supplier.SupplierName} : {supplier.Location} : {supplier.PhoneNumber}
               
              </Text>
              <Text>
                Quantity = {quantity}
              </Text>
              <Text>
                Total = {productTotal} Baht
              </Text>
            </>
          );
        })}
      </View>
      <View>
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
});
