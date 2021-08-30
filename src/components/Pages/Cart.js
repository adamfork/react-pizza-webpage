import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './Cart.css';
import CartItem from '../CartItem';
import CartHeader from '../CartHeader';
import CartFooter from '../CartFooter';
import Button from '../Button';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-container'>
      <CartHeader />
      {cartItems.map((item) => {
        return (
          <CartItem name={item.name} count={item.count} price={item.price} />
        );
      })}
      <CartFooter />
      <div className='cart-btn-placement'>
        <Button noClick='true'>Continue</Button>
      </div>
    </div>
  );
};

export default Cart;
