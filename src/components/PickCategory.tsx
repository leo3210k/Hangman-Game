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
    <div className="min-h-svh flex flex-col items-center bg-gradient-to-b from-black_rock to-deep_koamaru px-6 sm:px-14 pt-6 sm:pt-4">
      <div className="flex flex-col gap-14">
        <div className="w-full flex justify-between sm:justify-normal items-center sm:gap-16">
          <Link to="/">
            <button className="flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full shadow-howtoplay_back p-3">
              <img src={back} alt="back" className="w-6 sm:w-10" />
            </button>
          </Link>
          <h1 className="text-[2.6rem] sm:text-[6.5rem] text-transparent bg-clip-text tracking-wider sm:tracking-normal bg-gradient-to-b from-malibu to-white">Pick a Category</h1>
        </div>
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14">
          {categories.map(category => {
            return (
              <Link to="/game" state={{ category: category.replace(" ", "_") }} key={category}>
                <button className="w-full sm:w-80 sm:h-40 text-2xl sm:text-5xl text-white tracking-wider bg-blue_ribbon hover:bg-blue_ribbon_transparent rounded-full sm:rounded-[2.5rem] shadow-category uppercase py-5">
                  { category }
                </button>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default PickCategory;
