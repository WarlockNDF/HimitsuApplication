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
  Stack,
} from "native-base";
import http from "../../service/http";

const OrderDetail = ({ navigation, route }) => {
  const { ID, status } = route.params;
  const [orderBasicInfo, setOrderBasicInfo] = useState([]);
  const [orderDetails, setOrderDeatils] = useState([]);
  const [orderTotal, setOrderTotal] = useState([]);
  let updateData = [];

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

  const updateStock = async () => {
    let updateData = [];
    orderDetails.forEach((data) => {
      updateData.push({
        productId: data.ProductID,
        quantity: data.quantity,
      });
    });
    console.log(updateData);
    await http
      .post("stock", updateData)
      .then(async (res) => {
        console.log(res.data);
        console.log(res.data.message);
      })
      .catch((err) => {
        console.error(err);
        alert("Can't Update/Insert Stock!!");
      });
  };


  const updateStatus = async ()=>{

    await http
      .put("order/confirm", {OrderID:orderBasicInfo.OrderID, Status:"SUCCESS"})
      .then(async (res) => {
        console.log(res.data);
        console.log(res.data.message);
      })
      .catch((err) => {
        console.error(err);
        alert("Can't Update/Insert Stock!!");
      });
  }

  useEffect(async() => {
    await getDetail();
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#FFFFFF", flex: 1, alignItems: "center" }}
    >
      <View style={styles.container}>
        <ScrollView>

            <HStack style = {{marginBottom : 15}}>
            <View style={{ marginLeft : 10 , marginTop : 15 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Order {orderBasicInfo.OrderID}  
              </Text>
              </View>
              <View style={{ marginLeft : 60 , marginTop : 15 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {orderBasicInfo.OrderDate}</Text>
              </View>
            </HStack>

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
                  <Text style={{ fontSize: 15, marginBottom: 5 }}>
                  {ProductName} ({productType.TypeName}) 
                  </Text>
                  <Text style={{ fontSize: 15, marginBottom: 5 }}>
                  Quantity {quantity} * {UnitPrice}
                  </Text>
                  <Text style={{ fontSize: 15, marginBottom: 5 }}>
                  {supplier.SupplierName},{"\n"}
                    {supplier.Location} {supplier.PhoneNumber}
                  </Text>
                  <Text style={{ fontSize: 15, marginBottom: 5 }}>
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
           Summary Price : {orderTotal} Baht
          </Text>
        </Center>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            disabled = {status === 'SUCCESS'?true:false}
            style={styles.buttonContainer}
            onPress={() => {
              updateStock();
              updateStatus();
              alert("CONFIRM ORDER COMPLETE")
              navigation.navigate("status")
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {status === 'SUCCESS'?"Complete Order":"Confirm Order"}
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
