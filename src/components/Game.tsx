import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Game.css';
import heart from '../assets/images/icons/icon-heart.svg'; 
import hangmanData from '../assets/json/words.json';
import Letters from './Letters';
import Alphabet from './Alphabet';
import Modal from './Modal';

function Game() {
  const [open, setOpen] = useState(false);

  const [chosenWord, setChosenWord] = useState<string | null>(null);
  
  const data: HangmanData = hangmanData;
  
  const location = useLocation();
  const category = location.state.category as keyof HangmanWords;
  
  useEffect(() => {
    if (location.state?.category) {
      const word = getRandomWord(category);
      setChosenWord(word);
    }
  }, [location.state?.category]);

  function getRandomWord(category: keyof HangmanWords): string {
    const words = data.words[category];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function verifyLetter(element: any) {
    const letter = element.target.innerHTML.toLowerCase();

    if(chosenWord?.includes(letter)) {
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

      if(progress.value === 0) {
        gameOver();
      }
    }
  }

  function disableButton(element: any) {
    element.target.disabled = true;
  }

  function gameOver() {
    chosenWord?.split("").forEach(letter => {
      showLetter(letter);
    })

    setTimeout(() => {
      setOpen(true);
    }, 2000)
  }

  return (
    <div className="min-h-svh bg-gradient-to-b from-black_rock to-deep_koamaru">
      <div className="min-h-svh flex flex-col justify-between gap-14 px-6 pt-6 pb-8">
        <div className="w-full flex justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Modal open={open} setOpen={setOpen}/>
            <h1 className="text-5xl text-white bg-clip-text capitalize">{category.replace("_", " ")}</h1>
          </div>
          <div className="flex items-center gap-4">
            <progress value="100" max="100" className="w-16 h-3 bg-white rounded-full p-[2px]"></progress>
            <img src={heart} alt="heart" className="w-10" />
          </div>
        </div>
        <Letters chosenWord={chosenWord} />
        <Alphabet onClick={verifyLetter}/>
      </div>
    </div>
  );
}

export default Game;
