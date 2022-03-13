import { View, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartProvider";
import http from "../../service/http";
import { userContext } from "../../context/UserProvider";

const SummaryOrder = ({ navigation }) => {
  const userStore = React.useContext(userContext);
  const { cart, cartAction } = useCartContext([]);
  const [products, setProducts] = useState([]);
  const productID = [];

  const loopData = () => {
    cart.datas.forEach((context) => {
      productID.push(context.productID)
    })
  };

  //GET ARRAY LIST PRODUCT by ID
  const getProduct = async () => {
    try {
      let body = { ids: productID }
      const { status, data } = await http.post('product/ids', body)
      if (status !== 200) throw "No Such Product"
      console.log(data.data);
      setProducts(data.data);
    } catch (err) {
      alert(err.message)
      console.error(err.message);
    }
  }

  const getQty = (id) => {
    let idx = cart.datas.findIndex((cartProduct)=> cartProduct.productID === id)
    if(idx === -1) return 
    return cart.datas[idx].Quantity
  }

  useEffect(async () => {
    loopData();
    getProduct();
  }, [])

  // const createOrder = async () => {
  //   await http.post("order", {Id: UserID}).then(async (res)=> {
  //     consolse.log(res.data)
  //   }).catch((err) => {
  //     console.error(err);
  //     alert("Can't Create Order!!")
  //   })
  // }


  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          LIST PRODUCTS IN CART
        </Text>
      </View>
      <View>
        {
          products.map((product) => {
            return (
              <>
                <Text>{product.ProductName+" "+`${getQty(product.ProductID)}`}</Text>
              </>
            )
          })
        }
      </View>

    </SafeAreaView>
  );
};

export default SummaryOrder;
