import { View} from 'react-native'
import React, { useState } from 'react'
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
const ProductDetail = ({navigation,route}) => {
  const {Id,Name,supplierID,Quantity, BBE} = route.params;
  const [detail, setDetail] = useState([]);
  
  return (
    <Pressable mt={15}>
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
              <Text color="coolGray.800" mt="3" fontWeight="bold" fontSize="xl">
                {`Name : ` + Name}
              </Text>
              <Spacer />
              <Text color="darkBlue.800" mt="4" mr="2" fontSize="md">
                {`Supplier : ` + supplierID}
              </Text>
            </HStack>
            <Text
              color="coolGray.800"
              mt="2"
              fontWeight="medium"
              fontSize="xs"
              mb="2"
            >
              {`ID : ` + Id}
            </Text>
          </Box>
        );
      }}
    </Pressable>
  );
  
}

export default ProductDetail;