import React from 'react';

import back from '../assets/images/icons/icon-back.svg';

function HowToPlay() {
  return (
    <div className="h-screen flex justify-center items-center bg-mobile bg-center bg-cover">
      <div>
        <button className="w-10 h-10 flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full p-1">
          <img src={back} alt="back" className="w-6" />
        </button>
      </div>
    </div>
  );
}

export default HowToPlay;
