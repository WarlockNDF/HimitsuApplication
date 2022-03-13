import React from "react";
import moment from "moment";
import {
  Pressable,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Center,
  NativeBaseProvider,
  Badge,
} from "native-base";

moment.locale("th");

const ProductCard = ({navigation, name, typeName, productId, numberOfStock, bbe,supplier, index}) => {
  return (
    <Pressable key={index} mt={15} onPress={() => {navigation.navigate("productDetailed",
      {Id:productId, Name:name, Supplier: supplier, Quantity:numberOfStock, BBE:bbe})}}>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            width={96}
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
            rounded="8"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
          >
            <HStack>
              <Text
                color="coolGray.800"
                mt="2"
                fontWeight="medium"
                fontSize="xl"
              >
                {`Name: ` + name}
              </Text>
              <Spacer />
              <Text color="darkBlue.800" mt="4" mr="2" fontSize="md">
                {`Quantity: ` + numberOfStock}
              </Text>
            </HStack>
            <Text color="coolGray.800" mt="2" fontWeight="medium" fontSize="xs">
              {`Type: ` + typeName}
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              {"BBE: " + !bbe
                ? "ไม่มีการระบุ"
                : moment(bbe).format("LLL").toString()}
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              {"Price: "}$12,850.05
            </Text>
            <Flex>
              <Badge
                colorScheme={numberOfStock === 0 ? "danger" : "Blue"}
                _text={{
                  color: "white",
                }}
                variant="solid"
                rounded="2"
              >
                {numberOfStock === 0 ? "OUT OF STOCK" : "Available"}
              </Badge>
            </Flex>
          </Box>
        );
      }}
    </Pressable>
  );
};

export default ProductCard;
