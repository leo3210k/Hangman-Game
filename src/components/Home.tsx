import React from 'react';

import logo from '../assets/images/icons/logo.svg';
import play from '../assets/images/icons/icon-play.svg';

function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-mobile bg-center bg-cover">
      <div className="relative w-[90%] flex flex-col justify-center items-center gap-12 bg-gradient-to-b from-governor_bay to-governor_bay_transparent shadow-home_container rounded-[4.5rem] py-32">
        <img src={logo} alt="logo" className="absolute -top-24" />
        <button className="rounded-full bg-gradient-to-b from-blush_pink to-malibu shadow-home_play p-10">
          <img src={play} alt="play" />
        </button>
        <button className="text-4xl text-white tracking-wide bg-governor_bay shadow-home_how rounded-full uppercase px-6 py-3">
          how to play
        </button>
      </div>
      
    </div>
  );
}

export default Home;
