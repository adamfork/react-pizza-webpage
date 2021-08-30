import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  const [dropIcon, setDropIcon] = useState(true);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const showDropIcon = () => {
    if (window.innerWidth <= 1121) {
      setDropIcon(false);
    } else {
      setDropIcon(true);
    }
  };

  window.addEventListener('resize', showDropIcon);

  return (
    <Link
      to={props.goTo}
      className='nav-link'
      onClick={() => props.setHamClick(false)}
    >
      <li
        className='nav-item'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.text}
        {props.dropdown && !open && dropIcon && (
          <i className='fas fa-caret-down dropdown-icon'></i>
        )}
        {props.dropdown && open && dropIcon && (
          <i className='fas fa-caret-up dropdown-icon'></i>
        )}
        {open && props.children}
      </li>
    </Link>
  );
};

export default NavItem;
