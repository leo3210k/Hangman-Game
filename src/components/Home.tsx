import React from 'react';

import logo from '../assets/images/icons/logo.svg';
import play from '../assets/images/icons/icon-play.svg';

function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-mobile bg-center bg-cover">
      <div className="w-[90%] flex flex-col justify-center items-center bg-gradient-to-b from-governor_bay to-governor_bay_transparent shadow-home_container rounded-full">
        <img src={logo} alt="logo" />
        <button className="p-10 rounded-full bg-gradient-to-b from-blush_pink to-malibu shadow-home_play">
          <img src={play} alt="play" />
        </button>
        <button className="px-8 py-4 text-4xl text-white tracking-wide bg-governor_bay shadow-home_how rounded-full uppercase">
          how to play
        </button>
      </div>
      
    </div>
  );
}

export default Home;
