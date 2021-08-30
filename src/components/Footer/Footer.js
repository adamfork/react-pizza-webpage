import React from 'react';
import './Footer.css';
import Logo from '../Logo';
import Telephone from '../Telephone';

const Footer = () => {
  return (
    <div className='footer-container'>
      <Logo fontSize='3rem' goTo='null' />
      <div className='footer-wrap'>
        <section className='footer-details'>
          <span className='footer-title'>Address</span>
          <div className='footer-text'>
            <span className='footer-row'>Elephant Island</span>
            <span className='footer-row'>Antarctica</span>
          </div>
        </section>
        <section className='footer-details'>
          <div className='footer-text'>
            <span className='footer-row'>Delivery in 1-3 min.</span>
            <span className='footer-row'>Order online or via phone.</span>
            <span className='footer-row'>
              <Telephone fontSize='1rem' borderRadius='0.5rem' />
            </span>
          </div>
        </section>
        <section className='footer-details'>
          <span className='footer-title'>Open hours</span>
          <div className='footer-text'>
            <span className='footer-row'>Mon - Fri: 8:00 - 23:00</span>
            <span className='footer-row'>Sat - Sun: 11:00 - 22:00</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
