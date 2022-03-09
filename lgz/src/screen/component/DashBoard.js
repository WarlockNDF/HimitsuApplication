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
} from "native-base";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const DashBoard = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
    >
      <View style={styles.container}>
        <View style={styles.maginCard}>
          <Box>
            <Box
              maxW="40"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={12 / 9}>
                  <Center>
                    <AntDesign name="clockcircleo" size={50} color="red" />
                  </Center>
                </AspectRatio>
                <Center
                  bg="violet.500"
                  _dark={{
                    bg: "violet.400",
                  }}
                  _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs",
                  }}
                  position="absolute"
                  bottom="0"
                  px="3"
                  py="1.5"
                >
                  Nerly Expired
                </Center>
              </Box>
            </Box>
          </Box>
        </View>
        <View style={styles.maginCard}>
          <Box>
            <Box
              maxW="40"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={12 / 9}>
                  <Center>
                    <MaterialCommunityIcons
                      name="cart-arrow-down"
                      size={50}
                      color="black"
                    />
                  </Center>
                </AspectRatio>
                <Center
                  bg="violet.500"
                  _dark={{
                    bg: "violet.400",
                  }}
                  _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs",
                  }}
                  position="absolute"
                  bottom="0"
                  px="3"
                  py="1.5"
                >
                  Order
                </Center>
              </Box>
            </Box>
          </Box>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.maginCard}>
          <Box>
            <Box
              maxW="40"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={12 / 9}>
                  <Center>
                    <Feather name="box" size={50} color="black" />
                  </Center>
                </AspectRatio>
                <Center
                  bg="violet.500"
                  _dark={{
                    bg: "violet.400",
                  }}
                  _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs",
                  }}
                  position="absolute"
                  bottom="0"
                  px="3"
                  py="1.5"
                >
                  Low Stock
                </Center>
              </Box>
            </Box>
          </Box>
        </View>
        <View style={styles.maginCard}>
          <Box>
            <Box
              maxW="40"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={12 / 9}>
                  <Center>
                    <FontAwesome5 name="boxes" size={50} color="black" />
                  </Center>
                </AspectRatio>
                <Center
                  bg="violet.500"
                  _dark={{
                    bg: "violet.400",
                  }}
                  _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs",
                  }}
                  position="absolute"
                  bottom="0"
                  px="3"
                  py="1.5"
                >
                  Stock
                </Center>
              </Box>
            </Box>
          </Box>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
  },
  maginCard: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  flexBox: {
    flex: 1,
    justifyContent: "center",
  },
});