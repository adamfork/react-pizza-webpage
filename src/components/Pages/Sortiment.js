import React from 'react';
import Item from '../Item';

import './ProductPageLayout.css';

const SORTIMENT = [
  {
    img: 'images-food/appetizer-garlicbread.jpg',
    title: 'appetizers',
    goTo: '/appetizers',
  },
  {
    img: 'images-food/dips-garlic.jpg',
    title: 'dips',
    goTo: '/dips',
  },
  {
    img: 'images-food/beverages-pepsi.jpg',
    title: 'beverages',
    goTo: '/beverages',
  },
];

const Sortiment = () => {
  return (
    <div className='page-container'>
      <header className='page-header'>
        <div className='header-line'></div>
        <span className='header-title'>sortiment</span>
      </header>
      <main className='sortiment-wrap'>
        {SORTIMENT.map((sortiment) => {
          return (
            <Item
              key={sortiment.title}
              img={sortiment.img}
              title={sortiment.title}
              goTo={sortiment.goTo}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Sortiment;
