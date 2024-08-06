import React from 'react';

import back from '../assets/images/icons/icon-back.svg';

function HowToPlay() {
  return (
    <div className="h-screen bg-mobile bg-center bg-cover">
      <div className="w-full flex justify-between items-center">
        <button className="flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full shadow-howtoplay_back p-3">
          <img src={back} alt="back" className="w-6" />
        </button>
        <h1 className="text-5xl text-transparent bg-clip-text tracking-wide bg-gradient-to-b from-malibu to-white capitalize">how to play</h1>
      </div>
    </div>
  );
}

export default HowToPlay;
