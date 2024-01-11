import React from 'react';
import './card.css';

const Card = ({ title, text, image }) => {
  return (
    <div className='slideCard'>
      <div className='slideContent'>
        <img className='slideImg' src={image} alt="" />
        <h3 className='slideTitle'><span className='textGrey'>{title}</span></h3>
      </div>
      <p className='slideText'>{text}</p>
    </div>
  );
};

export default Card;
