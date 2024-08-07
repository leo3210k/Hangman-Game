import React from 'react';
import { Link } from 'react-router-dom';

import back from '../assets/images/icons/icon-back.svg';

function PickaCategory() {
  return (
    <div className="h-screen bg-gradient-to-b from-black_rock to-deep_koamaru px-6 pt-6 pb-8">
      <div className="flex flex-col gap-14">
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <button className="flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full shadow-howtoplay_back p-3">
              <img src={back} alt="back" className="w-6" />
            </button>
          </Link>
          <h1 className="text-5xl text-transparent bg-clip-text tracking-wider bg-gradient-to-b from-malibu to-white">How to Play</h1>
        </div>
      </div>
    </div>
  );
}

export default PickaCategory;
