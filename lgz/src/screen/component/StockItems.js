import { StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Select, ScrollView } from "native-base";
import http from "../../service/http";
import ProductCard from '../element/ProductCard';

const StockItems = () => {

  const [stocks, setStock] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await http.get('stock/findall')
      if (status !== 200) throw "No Such Product"
      console.log(data.data);
      setStock(data.data);
      alert(JSON.stringify(data.data));
    } catch (err) {
      alert(err.message)
      console.error(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <SafeAreaView>
    <View style={{ alignItems: 'center' }}>
            <ScrollView>
              {
                stocks.map((stock, index) => {
                  const { StockID, Quantity, product, productType} = stock;
                  return (
                    <>
                      {/*<ProductCard key={StockID+index} name={product.ProductName} typeName={productType.TypeName} numberOfStock={Quantity} />*/}
                    </>
                  )
                })
              }
            </ScrollView>
          </View>
          </SafeAreaView>
  )
}

export default StockItems

const styles = StyleSheet.create({})