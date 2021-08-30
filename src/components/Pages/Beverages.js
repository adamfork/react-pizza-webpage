import React from 'react';
import Item from '../Item';
import './ProductPageLayout.css';

const BEVERAGES = [
  {
    img: 'images-food/beverages-pepsi.jpg',
    title: 'pepsi',
    text: '0.33 l',
    price: '1',
  },
  {
    img: 'images-food/beverages-pepsimax.jpg',
    title: 'pepsi max',
    text: '0.33 l',
    price: '2',
  },
  {
    img: 'images-food/beverages-mirinda.jpg',
    title: 'mirinda',
    text: '0.33 l',
    price: '3',
  },
  {
    img: 'images-food/beverages-apple.jpg',
    title: 'apple juice',
    text: '0.33 l',
    price: '4',
  },
  {
    img: 'images-food/beverages-orange.jpg',
    title: 'orange juice',
    text: '0.33 l',
    price: '5',
  },
];

const Beverages = () => {
  return (
    <div className='page-container'>
      <header className='page-header'>
        <div className='header-line'></div>
        <span className='header-title'>dips</span>
      </header>
      <main className='page-wrap'>
        {BEVERAGES.map((beverage) => {
          return (
            <Item
              key={beverage.title}
              img={beverage.img}
              title={beverage.title}
              text={beverage.text}
              price={beverage.price}
              goTo='null'
              noClick='true'
            />
          );
        })}
      </main>
    </div>
  );
};

export default Beverages;
