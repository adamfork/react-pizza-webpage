import React from 'react';
import Item from '../Item';
import './ProductPageLayout.css';

const PIZZAS = [
  {
    img: 'images-food/pizza-margherita.jpg',
    title: 'margherita pizza',
    text: 'Mozzarella, tomato base',
    price: '1',
  },
  {
    img: 'images-food/pizza-ham.png',
    title: 'pizza with ham',
    text: 'ham, mozzarella, tomato base',
    price: '2',
  },
  {
    img: 'images-food/pizza-peperoni.jpg',
    title: 'peperoni pizza',
    text: 'Salami, mozzarella, tomato base',
    price: '3',
  },
  {
    img: 'images-food/pizza-hawaii.jpg',
    title: 'hawaii pizza',
    text: 'Ham, pineapple, mozzarella, tomato base',
    price: '4',
  },
  {
    img: 'images-food/pizza-quattroformagi.jpg',
    title: 'quattro formagi pizza',
    text: 'Camembert, blue cheese, mozzarella, cheddar, cherry tomatoes, cream base',
    price: '5',
  },
  {
    img: 'images-food/pizza-prosciutto.jpg',
    title: 'prosciutto pizza',
    text: 'Prosciutto, rocket, Corregio cheese, cherry tomatoes, mozzarella, tomato base',
    price: '6',
  },
  {
    img: 'images-food/pizza-carbonara.jpg',
    title: 'carbonara pizza',
    text: 'Bacon, mushrooms, red onion, cherry tomatoes, parmesan, mozzarella, cream base',
    price: '7',
  },
  {
    img: 'images-food/pizza-farmer.jpg',
    title: 'farmer pizza',
    text: 'Grilled chicken meat, green pepper bell, mushrooms, red onion, mozzarella, tomato base',
    price: '8',
  },
  {
    img: 'images-food/pizza-texas.jpg',
    title: 'texas pizza',
    text: 'Grilled chicken meat, corn, red onion, mozzarella, BBQ base',
    price: '9',
  },
];

const Pizzas = () => {
  return (
    <div className='page-container'>
      <header className='page-header'>
        <div className='header-line'></div>
        <span className='header-title'>pizzas</span>
      </header>
      <main className='page-wrap'>
        {PIZZAS.map((pizza) => {
          return (
            <Item
              key={pizza.title}
              img={pizza.img}
              title={pizza.title}
              text={pizza.text}
              price={pizza.price}
              goTo='null'
              noClick='true'
            />
          );
        })}
      </main>
    </div>
  );
};

export default Pizzas;
