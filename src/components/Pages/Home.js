import React from 'react';
import './Home.css';
import Logo from '../Logo';
import Telephone from '../Telephone';

const Home = () => {
  return (
    <div className='home-container'>
      <img src='images-food/pizza-ham.png' alt='pizza' className='pizza-img' />
      <div className='home-wrap'>
        <div className='home-title-wrap'>
          <span className='home-title'>WELCOME</span>
          <span className='home-title'>TO</span>
          <Logo fontSize={`clamp(4rem, 1rem + 5vw, 8rem)`} />
        </div>
        <div className='home-status-wrap'>
          <span className='home-status-title'>WE ARE:</span>
          <span className='home-status'>OPEN</span>
        </div>
        <Telephone fontSize={`clamp(1.5rem, 0.5rem + 1vw, 2rem)`} />
      </div>
    </div>
  );
};

export default Home;
