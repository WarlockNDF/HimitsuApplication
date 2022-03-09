import { StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";


const Search = () => {
  return (
    <SafeAreaView>
      <VStack>
        <VStack mt={10} w="100%" space={5} alignSelf="center">
          <Heading ml={5}>ค้นหาสินค้า</Heading>
          <View style={{paddingLeft:10,paddingRight:10}}>
            <Input placeholder="Search" InputRightElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} />
          </View>
        </VStack>
      </VStack>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 35,
    alignItems: "center",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#FDFEFE",
    width: 375,
  }
})