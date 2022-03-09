import { StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import http from "../../service/http";


const Search = () => {

  const [search, setSearch] = useState("");

  const doSearch = async () => {
    try {
      const { status, data } = await http.get(search === "" ? 'product' : `product/${search}`)
      if (status !== 200) throw "Can't Get Product"
      console.log(data.data)
    } catch (err) {
      console.log(err.messsage)
      alert("ไม่สามารถดึงข้อมูลได้")
    }
  }

  useEffect(() => {
    doSearch();
  }, []);

  return (
    <SafeAreaView>
      <VStack>
        <VStack mt={10} w="100%" space={5} alignSelf="center">
          <Heading ml={5}>ค้นหาสินค้า</Heading>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Input onChangeText={value => setSearch(value)} placeholder="Search" InputRightElement={
              <IconButton colorScheme="info" key={"ghost"} variant={"ghost"} _icon={{
                as: AntDesign,
                name: "search1"
              }} />}
            />
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