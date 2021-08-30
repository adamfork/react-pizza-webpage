import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartItem.css';

const CartItem = (props) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addCount = (e) => {
    const product = e.target.parentNode.parentNode.firstChild.textContent;
    const newItems = [...cartItems];
    const item = newItems.find((item) => item.name === product);
    const index = newItems.indexOf(item);

    item.count += 1;

    newItems.splice(index, 1);

    newItems.splice(index, 0, item);

    setCartItems([...newItems]);
  };

  const substractCount = (e) => {
    const product = e.target.parentNode.parentNode.firstChild.textContent;
    const newItems = [...cartItems];
    const item = newItems.find((item) => item.name === product);
    const index = newItems.indexOf(item);

    item.count -= 1;

    newItems.splice(index, 1);

    if (item.count !== 0) {
      newItems.splice(index, 0, item);
    }

    setCartItems([...newItems]);
  };

  return (
    <div className='cart-item-wrapper' key={props.name}>
      <span className='cart-name'>{props.name}</span>
      <span className='cart-price'>{props.price}</span>
      <div className='cart-btn-left'>
        <button
          onClick={substractCount}
          fontSize='1rem'
          className='cart-item-btn'
        >
          <i class='fas fa-minus cart-item-btn-icon'></i>
        </button>
      </div>
      <span className='cart-count'>{props.count}</span>
      <div className='cart-btn-right'>
        <button onClick={addCount} fontSize='1rem' className='cart-item-btn'>
          <i class='fas fa-plus'></i>
        </button>
      </div>
      <span className='cart-combined'>{props.price * props.count}</span>
    </div>
  );
};

export default CartItem;
