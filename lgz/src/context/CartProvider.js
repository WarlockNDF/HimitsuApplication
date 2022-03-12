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
    setCart(prevCart => ({
      ...prevCart,
      datas: [...prevCart.datas, product],
    }));
  }

  function clearCart(){
    setCart(initialCart);
  }

  const cartStore = {
    cart,
    cartAction: {
      addToCart,
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
