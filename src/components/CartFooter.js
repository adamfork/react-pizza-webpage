import React, { useContext } from 'react';
import './CartItem.css';
import { CartContext } from './CartContext';

const CartFooter = () => {
  const { cartItems } = useContext(CartContext);
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.count;
  });

  return (
    <div className='cart-footer-wrapper' key='cart-footer'>
      <span className='cart-footer-total-price'>{total}</span>
    </div>
  );
};

export default CartFooter;
