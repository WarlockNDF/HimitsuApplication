import React, {createContext, useContext, useState} from 'react';
import {node} from 'prop-types';

const CartContext = createContext({});

export function useCartContext() {
  return useContext(CartContext);
}

const initialCart = {
  datas: [],
};

function CartProvider({children}) {
  const [cart, setCart] = useState(initialCart);

  function addToCart(product) {
    const prodIdx =  cart.datas.findIndex((cartProduct)=> cartProduct.productID === product.productID)
    if (prodIdx === -1) {
      cart.datas.push(product)
    }else {
      cart.datas[prodIdx] = {...cart.datas[prodIdx], Quantity: product.Quantity}
      if(cart.datas[prodIdx].Quantity <= 0) cart.datas.splice(prodIdx,1)
    }
    setCart(cart);
  }

  function getCurrentCount(prodId) {
    const prodIdx =  cart.datas.findIndex((cartProduct)=> cartProduct.productID === prodId)
    if(prodIdx === -1) {
      return 0
    }
    return cart.datas[prodIdx].Quantity
  }

  function clearCart(){
    setCart(initialCart);
  }

  const cartStore = {
    cart, 
    cartAction: {
      addToCart,
      getCurrentCount,
      clearCart,
    },
  };

  return (
    <CartContext.Provider value={cartStore}>{children}</CartContext.Provider>
  );
}

CartProvider.propTypes ={
  children: node.isRequired,
}

export default CartProvider;
