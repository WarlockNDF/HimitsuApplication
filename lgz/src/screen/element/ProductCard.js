import React from "react";
import { Pressable, Text, Box, HStack, Spacer, Flex, Center, NativeBaseProvider, Badge } from "native-base";

const ProductCard = ({ name, typeName, numberOfStock }) => {
  return (
    <Pressable mt={15}>
      {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box width={96} borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            {`ชื่อสินค้า : `+name}
          </Text>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xs">
            {`ชื่อประเภทสินค้า : `+typeName}
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            {`จำนวนสินค้า: `+numberOfStock}
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            {"ราคาของสินค้า: "}$12,850.05
          </Text>
          <Flex>
            <Badge colorScheme={numberOfStock === 0? "danger" :"Blue"} _text={{
              color: "white"
            }} variant="solid" rounded="2">
              {numberOfStock === 0 ? "OUT OF STOCK" : "Available"}
            </Badge>
          </Flex>
        </Box>;
      }}
    </Pressable>
  )
}

export default ProductCard