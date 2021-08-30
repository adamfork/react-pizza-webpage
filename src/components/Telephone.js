import React from 'react';
import './Telephone.css';

const Telephone = (props) => {
  return (
    <div className='tel-wrap' style={{ borderRadius: props.borderRadius }}>
      <i
        className='fas fa-phone-alt tel-icon'
        style={{
          fontSize: props.fontSize,
          padding: `calc(${props.fontSize} / 2) ${props.fontSize}`,
        }}
      ></i>
      <span className='tel-num' style={{ fontSize: props.fontSize }}>
        +999 999 999 999
      </span>
    </div>
  );
};

export default Telephone;
