import { StyleSheet, SafeAreaView, View } from 'react-native'
import React, { useEffect, useState  } from 'react'
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Select, ScrollView } from "native-base";
import http from "../../service/http";
import NearlyCard from '../element/NearlyCard';

const NearlyExpire = () => {

  const [nearlyEx, setNearlyEx] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await http.get('stock/nearlyexpire')
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
                  const { StockID, product, BBE} = nearlyExprie;
                  return (
                  <>
                    <NearlyCard key={StockID+index} name={product.ProductName} stockID={StockID} bbe={BBE}/>
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