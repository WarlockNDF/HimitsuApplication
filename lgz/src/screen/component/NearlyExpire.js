import { StyleSheet, SafeAreaView, View } from 'react-native'
import React, { useEffect, useState  } from 'react'
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Select, ScrollView } from "native-base";
import http from "../../service/http";
import StockCard from '../element/StockCard';



const NearlyExpire = () => {

  const [nearlyEx, setNearlyEx] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await http.get('stock')
      if (status !== 200) throw "No Such Product"
      console.log(data.data);
      setNearlyEx(data.data);
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
                nearlyEx.map((nearlyExprie, index) => {
                  const { StockID, product, Quantity} = nearlyExprie;
                  return (
                  <>
                    <StockCard key={StockID+index} name={product.ProductName} typeName={product.productType.TypeName} numberOfStock={Quantity}/>
                  </>

                  )
                })
              }
            </ScrollView>
          </View>
          </SafeAreaView>
  )
}

export default NearlyExpire

const styles = StyleSheet.create({})