import React from 'react';

import back from '../assets/images/icons/icon-back.svg';

function HowToPlay() {
  return (
    <div className="h-screen flex justify-center items-center bg-mobile bg-center bg-cover">
      <div>
        <button className="bg-gradient-to-b from-blush_pink to-malibu p-4">
          <img src={back} alt="back" />
        </button>
      </div>
    </div>
  );
}

export default HowToPlay;
