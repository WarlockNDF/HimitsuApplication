import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
  Select,
  ScrollView,
} from "native-base";
import http from "../../service/http";
import ProductCard from "../element/ProductCard";
import React, { useEffect, useState } from "react";
import { AntDesign, CheckIcon } from "@expo/vector-icons";
import { StyleSheet, View, SafeAreaView } from "react-native";

const Search = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const doSearch = async () => {
    try {
      const { status, data } = await http.get(search === "" ? 'stock' : `stock/${search}`)
      if (status !== 200) throw "Can't Get Product"
      setProducts([...data.data])
      console.log(`set Product Logs: ${products}`);
    } catch (err) {
      console.log(err.messsage);
      alert("ไม่สามารถดึงข้อมูลได้");
    }
  };

  useEffect(() => {
    doSearch();
    return () => {
      setSearch("");
      setProducts([]);
    };
  }, []);

  return (
    <SafeAreaView>
      <VStack>
        <VStack mt={10} w="100%" space={5} alignSelf="center">
          <Heading ml={5}>ค้นหาสินค้า</Heading>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Input
              onSubmitEditing={() => doSearch()}
              onChangeText={(value) => setSearch(value)}
              placeholder="Search"
              InputRightElement={
                <IconButton
                  onPress={() => doSearch()}
                  colorScheme="info"
                  key={"ghost"}
                  variant={"ghost"}
                  _icon={{
                    as: AntDesign,
                    name: "search1",
                  }}
                />
              }
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <ScrollView height={"xl"}>
              {
                products.map((productinf, index) => {
                  const { StockID, Quantity, BBE } = productinf;
                  console.log(productinf);
                  return (
                    <>
                      <View key={productinf.product.ProductID + StockID + index}>
                        <ProductCard navigation={navigation}
                          name={productinf.product.ProductName} typeName={productinf.product.productType.TypeName}
                          productId={productinf.product.ProductID} numberOfStock={Quantity} bbe={BBE}
                          supplier={productinf.product.supplier} />
                      </View>
                    </>
                  )
                })
              }
            </ScrollView>
          </View>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 375,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#FDFEFE",
  },
});
