import React from "react";
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
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const DashBoard = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, margin: 4 }}>
        <Text>DashBoardx</Text>
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
                  <VStack >
                    <Center>
                      <Text
                        color="red.800"
                        mt="3"
                        fontWeight="medium"
                        fontSize="xl"
                        mb="3"
                      >
                        Nearly Expire
                      </Text>
                      <AntDesign name="clockcircle" size={35} color="red"/>
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
                        mt="3"
                        fontWeight="medium"
                        fontSize="xl"
                        mb="3"
                      >
                        Order
                      </Text>
                      <MaterialCommunityIcons
                        name="cart-arrow-down"
                        size={35}
                        color="black"
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
                        color="yellow.800"
                        mt="3"
                        fontWeight="medium"
                        fontSize="xl"
                        mb="3"
                      >
                        Low Stock
                      </Text>
                      <MaterialCommunityIcons
                        name="package-down"
                        size={35}
                        color="#FFDA02"
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
                        color="coolGray.800"
                        mt="3"
                        fontWeight="medium"
                        fontSize="xl"
                        mb="3"
                      >
                        Stock
                      </Text>
                      <Ionicons
                        name="file-tray-stacked-sharp"
                        size={35}
                        color="black"
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
    justifyContent: "center",
    flexDirection: "row",
  },
});
