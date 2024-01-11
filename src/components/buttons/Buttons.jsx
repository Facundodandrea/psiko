import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';

const Buttons = ({ feeling, imgSrc, linkTo }) => {
  return (
    <button className='feelingBtn'>
      <Link to={linkTo}>
        <div className='btnContent'>
          <div className="btnImg">
            <img src={imgSrc} alt={feeling} />
          </div>
          <div className="btnName">
            <span>{feeling}</span>
          </div>
        </div>
      </Link>
    </button>
  );
};

export default Buttons;
