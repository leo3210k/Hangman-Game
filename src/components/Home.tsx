import React from 'react';

import logo from '../assets/images/icons/logo.svg';

function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-mobile bg-center bg-cover">
      <div className="w-[90%] bg-gradient-to-b from-governor_bay to-governor_bay_transparent rounded-full">
        <img src={logo} alt="" />
      </div>
      
    </div>
  );
}

export default Home;
