import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = (props) => {
  return (
    <div className='navbar-buy'>
      <Link
        to={props.goTo}
        className='buy-wrap'
        onClick={() => {
          props.setHamClick(false);
        }}
      >
        <i className='fas fa-shopping-cart buy-icon'></i>
      </Link>
    </div>
  );
};

export default ShoppingCart;
