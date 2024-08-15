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
    <div className="min-h-svh flex flex-col items-center lg:block bg-gradient-to-b from-black_rock to-deep_koamaru px-6 py-6 sm:px-14 sm:py-4 lg:px-28">
      <div className="flex flex-col gap-14">
        <div className="w-full flex justify-between sm:justify-normal items-center sm:gap-16">
          <Link to="/">
            <button className="flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full shadow-howtoplay_back p-3 sm:p-4">
              <img src={back} alt="back" className="w-6 sm:w-10" />
            </button>
          </Link>
          <h1 className="text-[2.6rem] sm:text-[6.5rem] lg:text-[8rem] lg:flex-1 lg:text-center text-transparent bg-clip-text tracking-wider sm:tracking-normal bg-gradient-to-b from-malibu to-white">Pick a Category</h1>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-12">
          {categories.map(category => {
            return (
              <Link to="/game" state={{ category: category.replace(" ", "_") }} key={category}>
                <button className="w-full sm:w-[19rem] sm:h-40 text-2xl sm:text-5xl text-white tracking-wider bg-blue_ribbon hover:bg-blue_ribbon_transparent rounded-full sm:rounded-[2.5rem] shadow-category uppercase py-5">
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
