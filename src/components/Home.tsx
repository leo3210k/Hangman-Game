import React from 'react';

import logo from '../assets/images/icons/logo.svg';

function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-mobile bg-center bg-cover">
      <div className="w-[95%] bg-gradient-to-b from-governor_bay to-governor_bay_transparent">
        <img src={logo} alt="" />
      </div>
      
    </div>
  );
}

export default Home;
