import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Game.css';
import menu from '../assets/images/icons/icon-menu.svg'; 
import heart from '../assets/images/icons/icon-heart.svg'; 
import hangmanData from '../assets/json/words.json';
import { alphabet } from './utils/alphabet';
import Letters from './Letters';

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

  function verifyLetter(element: any) {
    const letter = element.target.innerHTML.toLowerCase();

    if(randomMovie.includes(letter)) {
      showLetter(letter);
    } else {
      decreaseLife();
    }

    disableButton(element);
  }

  function showLetter(letter: string) {
    const elements = document.querySelectorAll(`[data-letter="${letter}"]`)

    elements.forEach(element => {
      (element as HTMLElement).classList.remove('animation');
      void (element as HTMLElement).offsetWidth;
      (element as HTMLElement).classList.add('animation');
      (element as HTMLElement).style.color = "white";
    })
  }

  function decreaseLife() {
    const progress = document.querySelector('progress');

    if(progress) { 
      progress.value = Math.max(progress.value - 15, 0);

      if(progress.value == 0) console.log("Game Over!");
    }
  }

  function disableButton(element: any) {
    element.target.disabled = true;
  }

  return (
    <div className="min-h-svh bg-gradient-to-b from-black_rock to-deep_koamaru">
      <div className="min-h-svh flex flex-col justify-between gap-14 px-6 pt-6 pb-8">
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
        <Letters randomMovie={randomMovie} />
        <div className="flex justify-center items-center flex-wrap gap-3">
          {alphabet.map((letter, i) => {
            return (
              <button className="text-2xl text-deep_koamaru bg-white rounded-full px-4 py-3" key={i + letter}
                onClick={e => verifyLetter(e)}>
                {letter}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Game;
