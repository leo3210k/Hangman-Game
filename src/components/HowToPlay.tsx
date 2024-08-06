import React from 'react';

import back from '../assets/images/icons/icon-back.svg';

function HowToPlay() {
  return (
    <div className="h-screen flex justify-center items-center bg-mobile bg-center bg-cover">
      <div>
        <img src={back} alt="back" className="p-4" />
      </div>
    </div>
  );
}

export default HowToPlay;
