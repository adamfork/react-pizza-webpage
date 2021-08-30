import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = (props) => {
  return (
    <Link
      to={props.goTo}
      className='logo-container'
      onClick={() => props.setHamClick(false)}
    >
      <i
        className='fas fa-pizza-slice logo-icon'
        style={{ fontSize: props.fontSize }}
      ></i>
      <span className='logo-text-left' style={{ fontSize: props.fontSize }}>
        Pizza
      </span>
      <span className='logo-text-right' style={{ fontSize: props.fontSize }}>
        Buy
      </span>
    </Link>
  );
};

export default Logo;
