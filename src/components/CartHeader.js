import React from 'react';
import './CartItem.css';

const CartHeader = () => {
  return (
    <div className='cart-header-wrapper' key='cart-header'>
      <span className='cart-header-name'>product</span>
      <div className='cart-header-price'>
        <span className='cart-header-price-title'>price</span>
        <span className='cart-header-price-units'>[elf]</span>
      </div>
      <div className='cart-header-count'>
        <span className='cart-header-count-title'>amount</span>
        <span className='cart-header-count-units'>[pcs]</span>
      </div>
      <div className='cart-header-combined'>
        <span className='cart-header-combined-title'>total</span>
        <span className='cart-header-combined-units'>[elf]</span>
      </div>
    </div>
  );
};

export default CartHeader;
