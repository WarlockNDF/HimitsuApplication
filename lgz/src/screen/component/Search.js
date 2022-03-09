import { StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Select } from "native-base";
import { AntDesign, CheckIcon } from "@expo/vector-icons";
import http from "../../service/http";
import ProductCard from '../element/ProductCard';


const Search = () => {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const doSearch = async () => {
    try {
      const { status, data } = await http.get(search === "" ? 'product' : `product/${search}`)
      if (status !== 200) throw "Can't Get Product"
      if (search !== "") {
        let temp = [];
        temp.push(data.data)
        setProducts(temp)
        console.log(`set Product Logs: ${products}`);
        return;
      }
      setProducts([...data.data])
      console.log(`set Product Logs: ${products}`);
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
              <IconButton onPress={() => doSearch()} colorScheme="info" key={"ghost"} variant={"ghost"} _icon={{
                as: AntDesign,
                name: "search1"
              }} />}
            />
            {/* <Select minWidth="200" accessibilityLabel="Choose Filter" placeholder="Choose Filter" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} mt={1}>
              <Select.Item key={"product"} label="Product" value="product" />
              <Select.Item key={"stock"} label="stock" value="stock" />
            </Select> */}
          </View>
          <View style={{ alignItems: 'center' }}>
            {
              products.map((product, index) => {
                const { ProductID, ProductName, productType } = product;
                return (
                  <>
                    <ProductCard key={ProductID} name={ProductName} typeName={productType.TypeName} numberOfStock={15} />
                  </>
                )
              })
            }
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