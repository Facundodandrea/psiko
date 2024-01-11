// FeelingButtonsContainer.js
import React from 'react';
import Buttons from '../buttons/Buttons';
import links from '../../data/links';

const Feelings = () => {
  return (
<div className='feelingSection'>
      <div className="feelingTitle">
        <h1>¿Cómo te sientes en este momento?</h1>
      </div>
      <div className='feelingBtns'>
        {links.map((buttonData) => (
          <Buttons
            key={buttonData.id}
            feeling={buttonData.feeling}
            imgSrc={buttonData.imgSrc}
            linkTo={buttonData.linkTo}
          />
        ))}
      </div>
    </div>
  );
};

export default Feelings;
