import { StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Select, ScrollView } from "native-base";
import http from "../../service/http";
import StockCard from '../element/StockCard';

const StockItems = () => {

  const [stocks, setStock] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await http.get('stock')
      if (status !== 200) throw "No Such Product"
      console.log(data.data);
      setStock(data.data);
    } catch (err) {
      alert(err.message)
      console.error(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <SafeAreaView style = {{backgroundColor : "#FFFFFF"}}> 
    <View style={{ alignItems: 'center' }}>
            <ScrollView>
              {
                stocks.map((stock, index) => {
                  const { StockID, product, Quantity} = stock;
                  return (
                  <>
                    <StockCard key={StockID+index} name={product.ProductName} typeName={product.productType.TypeName} numberOfStock={Quantity} stockID={StockID}/>
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