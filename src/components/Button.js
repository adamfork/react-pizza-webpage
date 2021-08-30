import React, { useContext } from 'react';
import './Button.css';
import { CartContext } from './CartContext';

const Button = (props) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  let price = 0;

  const handleClick = (e) => {
    const product = e.target.parentNode.parentNode.firstChild.textContent;
    const priceStr = e.target.parentNode.firstChild.textContent;
    const priceNum = priceStr.match(/(\d+)/);
    price += Number(priceNum[0]);

    const newItems = [...cartItems];
    const item = newItems.find((item) => item.name === product);
    const index = newItems.indexOf(item);

    if (item !== undefined) item.count += 1;
    if (index > -1) {
      newItems.splice(index, 1);
      if (newItems.length === 0) {
        newItems.push(item);
      } else {
        newItems.splice(index, 0, item);
      }
    } else {
      newItems.push({ name: product, count: 1, price: price });
    }

    setCartItems([...newItems]);
  };
  return (
    <div
      className='btn-container'
      onClick={!props.noClick && handleClick}
      style={{ fontSize: props.fontSize }}
    >
      {props.children}
    </div>
  );
};

export default Button;
