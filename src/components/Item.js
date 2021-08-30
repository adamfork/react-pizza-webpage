import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
  const [details, setDetails] = useState(true);

  useEffect(() => {
    if (props.text && props.price) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  }, [props.text, props.price]);

  return (
    <Link
      to={props.goTo}
      className='item-container'
      onClick={
        props.noClick &&
        ((e) => {
          e.preventDefault();
        })
      }
      style={{ cursor: props.noClick ? 'default' : 'pointer' }}
    >
      <div className='item-wrap'>
        <figure className='item-image-wrap'>
          <img src={props.img} alt='product' className='item-image' />
        </figure>
        <section
          className='item-content'
          style={{ height: !details && 'fit-content' }}
        >
          <span className='item-title'>{props.title}</span>
          {details && <p className='item-description'>{props.text}</p>}
          {details && (
            <footer className='item-footer'>
              <span className='item-price'>{props.price} ELF</span>
              <Button>Add</Button>
            </footer>
          )}
        </section>
      </div>
    </Link>
  );
};

export default Item;
