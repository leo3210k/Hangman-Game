import React from 'react';
import { Link } from 'react-router-dom';

import back from '../assets/images/icons/icon-back.svg';

function PickCategory() {
  const categories = [
    "movies",
    "tv shows",
    "countries",
    "capital cities",
    "animals",
    "sports"
  ]

  return (
    <div className="h-screen bg-gradient-to-b from-black_rock to-deep_koamaru px-6 pt-6">
      <div className="flex flex-col gap-14">
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <button className="flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full shadow-howtoplay_back p-3">
              <img src={back} alt="back" className="w-6" />
            </button>
          </Link>
          <h1 className="text-[2.6rem] text-transparent bg-clip-text tracking-wider bg-gradient-to-b from-malibu to-white">Pick a Category</h1>
        </div>
        <div className="flex flex-col gap-4">
          {categories.map(category => {
            return (
              <button className="text-2xl text-white tracking-wider bg-blue_ribbon rounded-full shadow-category uppercase py-5">{ category }</button>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default PickCategory;
