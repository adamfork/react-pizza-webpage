import React from 'react';
import './Navbar.css';

const DropdownMenu = (props) => {
  return <ul className='dropdown'>{props.children}</ul>;
};

export default DropdownMenu;
