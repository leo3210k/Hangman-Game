import React from 'react';

import logo from '../assets/images/icons/logo.svg';

function Home() {
  return (
    <div className="h-screen bg-mobile bg-center bg-cover">
      <div className="bg-gradient-to-b from-governor_bay to-governor_bay_transparent">
        <img src={logo} alt="" />
      </div>
      
    </div>
  );
}

export default Home;
