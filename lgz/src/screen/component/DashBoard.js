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

const DashBoard = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, margin: 4, alignItems: "center" }}>
        <Text style={{ fontSize: 32, padding: 60, fontWeight: "bold" }}>
          DASHBOARD
        </Text>
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
                  height="40"
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
                        fontSize="lg"
                        mb="2"
                      >
                        Nearly Expire
                      </Text>
                      <Image
                        source={require("../../../assets/logo/clock-expire.png")}
                        style={{ width: 80, height: 80 }}
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
                  height="40"
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
                        fontSize="lg"
                        mb="2"
                      >
                        Order
                      </Text>
                      <Image
                        source={require("../../../assets/logo/wheelbarrow.png")}
                        style={{ width: 80, height: 80 }}
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
                  height="40"
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
                        fontSize="lg"
                        mb="2"
                      >
                        Low Stock
                      </Text>
                      <Image
                        source={require("../../../assets/logo/out-of-stock.png")}
                        style={{ width: 80, height: 80 }}
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
                  height="40"
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
                        fontSize="lg"
                        mb="2"
                      >
                        Stock
                      </Text>
                      <Image
                        source={require("../../../assets/logo/packages.png")}
                        style={{ width: 80, height: 80 }}
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
