import React from "react";
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

const StockCard = ({ name, typeName, numberOfStock, stockID }) => {
  return (
    <Pressable mt={15}>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            width={'sm'}
            borderWidth="1"
            borderColor="coolGray.300"
            shadow="3"
            bg={
              isPressed
                ? "coolGray.200"
                : isHovered
                ? "coolGray.200"
                : "#FFFF"
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
                {'Name : '+name}
              </Text>
              <Spacer />
              <Text
                color="darkBlue.800"
                mt="4"
                mr="2"
                fontSize="md"
                fontWeight='bold'
              >
                {`Quantity : ` + numberOfStock}
              </Text>
            </HStack>
            <Text color="coolGray.800" fontWeight="medium" fontSize="md" mb="2">
              {'Stock : '+stockID}
            </Text>
            <Flex>
              <Badge
                colorScheme={numberOfStock === 0 ? "danger" : "green"}
                _text={{
                  color: "white",
                  fontWeight:"bold"
                }}
                variant="solid"
                rounded="2"
              >
                {numberOfStock === 0 ? "OUT OF STOCK" : "AVAILABLE"}
              </Badge>
            </Flex>
          </Box>
        );
      }}
    </Pressable>
  );
};

export default StockCard;
