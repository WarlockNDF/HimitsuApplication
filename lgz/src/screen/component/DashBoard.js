import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  VStack,
  Stack,
  NativeBaseProvider,
  Pressable,
  Spacer,
  Flex,
  Badge,
  Modal,
  Button
} from "native-base";
import React, { useEffect, useState } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import http from "../../service/http";
import * as Notifications from 'expo-notifications';

function datepick(dateVar) {
  let customDatesStyles = [];
  console.log(dateVar)
  dateVar.forEach(customdateFunction);
  function customdateFunction(item) {
    customDatesStyles.push({
      date: item,
      // Random colors
      style: { backgroundColor: '#FFC94B' },
      textStyle: { color: 'black' }, // sets the font color
      containerStyle: [], // extra styling for day container
      allowDisabled: false, // allow custom style to apply to disabled dates
    });
  }
  return (customDatesStyles);
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowAlert: true
  })
})

async function expireToday(count) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Product In Stock Expire Today",
      body: `มีสินค้าหมดอายุวันนี้จำนวน ${count}`,
      data: { exprireToday: count }
    },
    trigger: { seconds: 2 }
  })
}

/* ["20220307","20220309"] */
const DashBoard = ({ navigation }) => {

  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [bbeArr, setBbeArr] = useState([]);


  const bbeAll = async () => {
    try {
      const { status, data } = await http.get('stock')
      if (status !== 200) throw "Can't Get Product"
      setProducts([...data.data])
    } catch (err) {
      console.log(err.messsage);
      alert("ไม่สามารถดึงข้อมูลได้");
    }
  }
  const [bbeinfo, setbbeinfo] = useState([]);
  const bbeData = async (bbedateVar) => {
    try {
      const { status, data } = await http.get(`stock/bbe/${bbedateVar}`)
      if (status !== 200) throw "Can't Get Product"
      setbbeinfo([...data.data])
      console.log(bbeinfo);
    } catch (err) {
      console.log(err.messsage);
      alert("ไม่สามารถดึงข้อมูลได้");
    }
  }


  useEffect(async() => {
    await bbeAll();
  }, []);


  useEffect( async () => {
    let temp = [];
    let notiData = [];
    products.map((productinf, index) => {
      // console.log(productinf);
      const { BBE } = productinf;
      let tempDate = new Date(BBE)
      if(tempDate.toISOString().split('T')[0] === BBE.split('T')[0]){
        notiData.push(productinf)
      }
      temp.push(tempDate.toISOString());
    })
    setBbeArr([...temp])
    if (notiData.length > 0) await expireToday(notiData.length)
  }, [products])



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1, margin: 4, alignItems: "center" }}>
        <Text style={{ fontSize: 26, padding: 12, fontWeight: "bold" }}>
          DASHBOARD
        </Text>
        <View style={{ alignItems: "center" }}>
          <Box borderWidth="2" borderColor="coolGray.300" bgColor="white">
            <CalendarPicker width={330} minDate={moment().startOf('month')}
              maxDate={moment().endOf('month')} customDatesStyles={datepick(bbeArr)}
              onDateChange={async (date) => {
                await bbeData(new Date(date).toISOString())
                console.log(`BBE: ${bbeinfo.length}`);
                // bbeinfo.forEach((data) => {
                //   console.log(`BBEDATA : ${data}`);
                // })
                if (bbeinfo.length === 0) return
                setShowModal(true);
              }} />
          </Box>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          margin: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => navigation.navigate("checkExpire")}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box
                  width="40"
                  borderWidth="1"
                  borderColor="coolGray.300"
                  shadow="3"
                  bg={
                    isPressed
                      ? "coolGray.200"
                      : isHovered
                      ? "coolGray.200"
                      : "white"
                  }
                  p="5"
                  m="2"
                  rounded="8"
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                >
                  <VStack>
                    <Center>
                      <Text
                        color="#FA2020"
                        fontWeight="bold"
                        fontSize="md"
                        mb="2"
                      >
                        NEARLY EXPIRE
                      </Text>
                      <Image
                        source={require("../../../assets/logo/clock-expire.png")}
                        style={{ width: 50, height: 50 }}
                        alt="nearly-expire"
                      />
                    </Center>
                  </VStack>
                </Box>
              );
            }}
          </Pressable>

          <Pressable onPress={() => navigation.navigate("orders")}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box
                  width="40"
                  borderWidth="1"
                  borderColor="coolGray.300"
                  shadow="3"
                  bg={
                    isPressed
                      ? "coolGray.200"
                      : isHovered
                      ? "coolGray.200"
                      : "white"
                  }
                  p="5"
                  m="2"
                  rounded="8"
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                >
                  <VStack>
                    <Center>
                      <Text
                        color="coolGray.800"
                        fontWeight="bold"
                        fontSize="md"
                        mb="2"
                      >
                        ORDERS
                      </Text>
                      <Image
                        source={require("../../../assets/logo/wheelbarrow.png")}
                        style={{ width: 50, height: 50 }}
                        alt="order"
                      />
                    </Center>
                  </VStack>
                </Box>
              );
            }}
          </Pressable>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => navigation.navigate("lowStock")}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box
                  width="40"
                  borderWidth="1"
                  borderColor="coolGray.300"
                  shadow="3"
                  bg={
                    isPressed
                      ? "coolGray.200"
                      : isHovered
                      ? "coolGray.200"
                      : "white"
                  }
                  p="5"
                  m="2"
                  rounded="8"
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                >
                  <VStack>
                    <Center>
                      <Text
                        color="#FFAD2D"
                        fontWeight="bold"
                        fontSize="md"
                        mb="2"
                      >
                        LOW STOCKS
                      </Text>
                      <Image
                        source={require("../../../assets/logo/out-of-stock.png")}
                        style={{ width: 50, height: 50 }}
                        alt="low-stock"
                      />
                    </Center>
                  </VStack>
                </Box>
              );
            }}
          </Pressable>

          <Pressable onPress={() => navigation.navigate("checkStock")}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box
                  width="40"
                  borderWidth="1"
                  borderColor="coolGray.300"
                  shadow="3"
                  bg={
                    isPressed
                      ? "coolGray.200"
                      : isHovered
                      ? "coolGray.200"
                      : "white"
                  }
                  p="5"
                  m="2"
                  rounded="8"
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                >
                  <VStack>
                    <Center>
                      <Text
                        color="#000"
                        fontWeight="bold"
                        fontSize="md"
                        mb="2"
                      >
                        STOCKS
                      </Text>
                      <Image
                        source={require("../../../assets/logo/packages.png")}
                        style={{ width: 50, height: 50 }}
                        alt="stock"
                      />
                    </Center>
                  </VStack>
                </Box>
              );
            }}
          </Pressable>
        </View>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>รายการของหมดอายุวันนี้</Modal.Header>
            <Modal.Body>
              {
                bbeinfo.map((product, index) => {
                  console.log(product);
                  return (
                    <>
                      <View key={index} style={{borderBottomColor:"black", borderBottomWidth:2, marginTop:5}}>
                        <Text>StockID Id: {product.StockID}</Text>
                        <Text>Product Name: {product.ProductName}</Text>
                        <Text>Product Quantity: {product.Quantity}</Text>
                        <Text>Product TypeName: {product.product.productType.TypeName}</Text>
                        <Text>Lot Number: {product.lot}</Text>
                      </View>
                    </>
                  )
                })
              }
            </Modal.Body>
            <Modal.Footer>
              <Button onPress={() => { setShowModal(false); setbbeinfo([]) }}>
                close
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
