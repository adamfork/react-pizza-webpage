import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../Logo';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import ShoppingCart from './ShoppingCart';

const Navbar = (props) => {
  const [hamClick, setHamClick] = useState(false);

  const handleHamClick = () => {
    setHamClick(!hamClick);
  };

  return (
    <nav className='navbar'>
      <Logo goTo='/' setHamClick={setHamClick} />
      <div className='ham-wrap' onClick={handleHamClick}>
        <i className={hamClick ? 'fas fa-times ham' : 'fas fa-bars ham'} />
      </div>
      <ul className={hamClick ? 'navbar-nav active' : 'navbar-nav'}>
        <NavItem text='Home' goTo='/' setHamClick={setHamClick} />
        <NavItem text='Pizzas' goTo='/pizzas' setHamClick={setHamClick} />
        <NavItem
          text='Sortiment'
          dropdown='true'
          goTo='/sortiment'
          setHamClick={setHamClick}
        >
          <DropdownMenu hamClick={hamClick}>
            <NavItem
              text='Appetizers'
              goTo='/appetizers'
              setHamClick={setHamClick}
            />
            <NavItem text='Dips' goTo='/dips' setHamClick={setHamClick} />
            <NavItem
              text='Beverages'
              goTo='/beverages'
              setHamClick={setHamClick}
            />
          </DropdownMenu>
        </NavItem>
        <NavItem text='Contact' goTo='/contact' setHamClick={setHamClick} />
        <ShoppingCart goTo='/cart' setHamClick={setHamClick} />
      </ul>
    </nav>
  );
};

export default Navbar;
