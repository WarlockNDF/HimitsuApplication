import React, { useState, useEffect } from "react";
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
  Modal,
  View,
  Button,
} from "native-base";
import moment from "moment";

const StatusCard = ({ navigation, orderID, orderDate, status }) => {
  let ID = 0;
  const setID = () => {
    ID = orderID;
  };

  return (
    <View>
      <Pressable
        mt={15}
        onPress={() => {
          navigation.navigate("orderDetail", { ID , status});
        }}
      >
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              width={"sm"}
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
                  mt="3"
                  fontWeight="bold"
                  fontSize="xl"
                >
                  {`Order ID : ` + orderID}
                </Text>
                {setID()}
              </HStack>
              <Text
                color="coolGray.800"
                fontWeight="medium"
                fontSize="sm"
                mb="2"
              >
                {`Order Date : ` + moment(orderDate).format("l")}
              </Text>
              <Flex>
                <Badge
                  colorScheme={status === "SUCCESS"?"success":"danger"}
                  _text={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                  variant="solid"
                  rounded="2"
                >
                  {status}
                </Badge>
              </Flex>
            </Box>
          );
        }}
      </Pressable>
    </View>
  );
};

export default StatusCard;
