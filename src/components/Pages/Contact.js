import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123253.5701227304!2d-55.178345833575214!3d-61.13889924110983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc0c6e1e1749c247%3A0x231e3052abee7484!2sElephant%20Island!5e0!3m2!1sen!2scz!4v1630143997726!5m2!1sen!2scz'
        width='100%'
        height='100%'
        style={{ border: 0 }}
        allowfullscreen=''
        loading='lazy'
        title='map-to-knowhere'
      ></iframe>
    </div>
  );
};

export default Contact;
