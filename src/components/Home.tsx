import React from 'react';
import { Link } from "react-router-dom";

import logo from '../assets/images/icons/logo.svg';
import play from '../assets/images/icons/icon-play.svg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-svh flex justify-center items-center bg-mobile sm:bg-tablet lg:bg-desktop bg-center bg-cover">
      <div className="relative w-[90%] sm:w-[32rem] flex flex-col justify-center items-center gap-16 bg-gradient-to-b from-governor_bay to-governor_bay_transparent shadow-home_container rounded-[4.5rem] -mb-24 py-28">
        <img src={logo} alt="logo" className="absolute -top-28" />
        <Link to="/pickcategory">
          <motion.button className="rounded-full bg-gradient-to-b from-blush_pink to-malibu shadow-home_play p-10"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <img src={play} alt="play" />
          </motion.button>
        </Link>
        <Link to="/howtoplay">
          <motion.button className="home_buttons text-4xl text-white tracking-wide bg-blue_ribbon shadow-home_how rounded-full uppercase px-6 sm:px-16 py-3"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            {t('how to play')}
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
