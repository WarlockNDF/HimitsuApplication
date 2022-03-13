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
} from "native-base";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";

function datepick(dateVar){
  let customDatesStyles = [];
  console.log(dateVar)
  dateVar.forEach(customdateFunction);
  function customdateFunction(item){
    customDatesStyles.push({
      date: moment(item).format("L"),
      // Random colors
      style: {backgroundColor: '#FFC94B'},
      textStyle: {color: 'black'}, // sets the font color
      containerStyle: [], // extra styling for day container
      allowDisabled: true, // allow custom style to apply to disabled dates
    });
  }
  return(customDatesStyles);
}

const DashBoard = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#FFFFFF" }}>
      <View style={{ flex: 1, margin: 4, alignItems: "center" }}>
        <Text style={{ fontSize: 26, padding: 12, fontWeight: "bold" }}>
          DASHBOARD
        </Text>
        <View style={{ alignItems: "center" }}>
          <Box borderWidth="2" borderColor="coolGray.300" bgColor="white">
            <CalendarPicker width={330} customDatesStyles={datepick(["20220307","20220309"])} />
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
                      : "coolGray.100"
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
                      : "coolGray.100"
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
                      : "coolGray.100"
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
                      : "coolGray.100"
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
