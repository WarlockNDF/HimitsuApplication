import { StyleSheet, View, FlatList ,SafeAreaView} from 'react-native';
import React, { useState, useEffect } from 'react';
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Select, ScrollView } from 'native-base';
import http from "../../service/http";
import StockCard from '../element/StockCard';

const LowStockItems = ()=> {
  
  const [lowstocks, setLowStock] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await http.get('stock/lowstocks')
      if (status !== 200) throw "No Such Product"
      console.log(data.data);
      setLowStock(data.data);
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
                lowstocks.map((lowstock, index) => {
                  const { StockID, product, Quantity} = lowstock;
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
    

export default LowStockItems

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#6495ED",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: 370,
  },
  heading: {
    margin: 10,
    fontSize: 35,
    borderRadius: 3,
    color: '#FDFEFE',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',
  },
  container: {
    height: 523,
    marginTop: 15,
    marginLeft: 20,
    borderWidth: 2,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: '#FDFEFE',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  btnSty: {
    fontSize: 16,
    color: 'white',
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  buttonEd: {
    elevation: 3,
    borderRadius: 4,
    marginVertical: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 50,
    justifyContent: 'center',
    backgroundColor: '#ffaa42',
  },
  buttonEn: {
    elevation: 3,
    borderRadius: 4,
    marginVertical: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 50,
    justifyContent: 'center',
    backgroundColor: '#f77665',
  },
  product: {
    color: '#000',
    fontSize: 20,
    textAlign: 'right',
  },
  buttonImageIconStyle: {
    width: 35,
    height: 35,
    marginLeft: 15,
    resizeMode: 'stretch',
  },
  productIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});