import React from 'react';
import Item from '../Item';
import './ProductPageLayout.css';

const APPETIZERS = [
  {
    img: 'images-food/appetizer-garlicbread.jpg',
    title: 'garlic bread',
    text: 'Crispy bread baked with garlic',
    price: '1',
  },
  {
    img: 'images-food/appetizer-garlicbreadwithcheese.jpg',
    title: 'garlic bread with cheese',
    text: 'Crispy bread baked with garlic and cheese',
    price: '2',
  },
  {
    img: 'images-food/appetizer-chickenwings.jpg',
    title: 'chicken wings',
    text: 'Tasty chicken wings marinated in unique mix of spices',
    price: '3',
  },
  {
    img: 'images-food/appetizer-hamroll.png',
    title: 'ham roll',
    text: 'Grilled tortilla filled with mustard sauce, mozzarella, cheddar, corregio cheese, ham and rosemary',
    price: '4',
  },
];

const Apetizers = () => {
  return (
    <div className='page-container'>
      <header className='page-header'>
        <div className='header-line'></div>
        <span className='header-title'>appetizers</span>
      </header>
      <main className='page-wrap'>
        {APPETIZERS.map((appetizer) => {
          return (
            <Item
              key={appetizer.title}
              img={appetizer.img}
              title={appetizer.title}
              text={appetizer.text}
              price={appetizer.price}
              goTo='null'
              noClick='true'
            />
          );
        })}
      </main>
    </div>
  );
};

export default Apetizers;
