import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Game.css';
import menu from '../assets/images/icons/icon-menu.svg'; 
import heart from '../assets/images/icons/icon-heart.svg'; 
import hangmanData from '../assets/json/words.json';
import { alphabet } from './utils/alphabet';

function Game() {
  const data: HangmanData = hangmanData;

  function getRandomWord(category: keyof HangmanWords): string {
    const words = data.words[category];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  const location = useLocation();

  const category = location.state.some as keyof HangmanWords;
  const randomMovie = getRandomWord(category);

  return (
    <div className="h-screen bg-gradient-to-b from-black_rock to-deep_koamaru px-6 pt-6 pb-8">
      <div className="flex flex-col gap-14">
        <div className="w-full flex justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <button className="flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full shadow-howtoplay_back p-3">
                <img src={menu} alt="menu" className="w-6" />
              </button>
            </Link>
            <h1 className="text-5xl text-white bg-clip-text">Movies</h1>
          </div>
          <div className="flex items-center gap-4">
            <progress value="100" max="100" className="w-16 h-3 bg-white rounded-full p-[2px]"></progress>
            <img src={heart} alt="heart" className="w-10" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4">
          {randomMovie.split("_").map((word, i) => {
            return (
              <div className="flex flex-wrap gap-2" key={word + i}>
                {word.split("").map((letter, i) => {
                  return <div className="text-4xl text-white bg-blue_ribbon rounded-full shadow-category uppercase px-4 py-4" key={letter + i}>{letter}</div>;
                })}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4">
          {alphabet.map((letter, i) => {
            return (
              <div className="bg-white rounded-full px-3 py-3">{letter}</div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Game;
