import React, { useState, useEffect, createContext } from 'react';

const LOCAL_STORAGE_KEY = 'foodApp.cartItems';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(sessionStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItems) setCartItems(storedItems);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
