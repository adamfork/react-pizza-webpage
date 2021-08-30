import React from 'react';
import Item from '../Item';
import './ProductPageLayout.css';

const DIPS = [
  {
    img: 'images-food/dips-bbq.jpg',
    title: 'bbq dip',
    text: '40g',
    price: '1',
  },
  {
    img: 'images-food/dips-garlic.jpg',
    title: 'garlic dip',
    text: '40g',
    price: '2',
  },
  {
    img: 'images-food/dips-tartar.jpg',
    title: 'tartar sauce',
    text: '40g',
    price: '3',
  },
  {
    img: 'images-food/dips-mustardmayo.jpg',
    title: 'mustard-mayo dip',
    text: '40g',
    price: '4',
  },
];

const Dips = () => {
  return (
    <div className='page-container'>
      <header className='page-header'>
        <div className='header-line'></div>
        <span className='header-title'>dips</span>
      </header>
      <main className='page-wrap'>
        {DIPS.map((dip) => {
          return (
            <Item
              key={dip.title}
              img={dip.img}
              title={dip.title}
              text={dip.text}
              price={dip.price}
              goTo='null'
              noClick='true'
            />
          );
        })}
      </main>
    </div>
  );
};

export default Dips;
