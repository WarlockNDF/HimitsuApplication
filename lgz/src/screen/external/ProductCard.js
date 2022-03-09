import React from "react";
import { Pressable, Text, Box, HStack, Spacer, Flex, Center, NativeBaseProvider,Badge } from "native-base";

function Example() {
  return <Pressable>
      {({
      isHovered,
      isFocused,
      isPressed
    }) => {
      return <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
        transform: [{
          scale: isPressed ? 0.96 : 1
        }]
      }}>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              Payment to Prayut
            </Text>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="x5">
              Vegents store
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              Feb 29
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              $12,850.05
            </Text>
            <Flex>
              <Badge colorScheme="Blue" _text={{
            color: "white"
          }} variant="solid" rounded="2">
                Success
              </Badge>
            </Flex>
          </Box>;
    }}
    </Pressable>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    