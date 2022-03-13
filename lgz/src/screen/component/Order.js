import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "native-base";
import http from "../../service/http";
import ProductOrderCard from "../element/ProductOrderCard";

const Order = ({navigation}) => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await http.get("product");
      if (status !== 200) throw "No Such Product";
      console.log(data.data);
      setProducts(data.data);
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style = {{backgroundColor : "#FFFFFF"}}>
      <View style={{ alignItems: "center" }}>
        <ScrollView>
          {products.map((product, index) => {
            const { ProductID, ProductName, productType, supplier } = product;
            return (
              <>
                <ProductOrderCard
                  key={ProductID + index}
                  navigation={navigation}
                  productID={ProductID}
                  productName={ProductName}
                  typeName={productType.TypeName}
                  supplierName={supplier.SupplierName}
                />
              </>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({});
