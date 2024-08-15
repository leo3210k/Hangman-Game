import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Game.css';
import heart from '../assets/images/icons/icon-heart.svg'; 
import hangmanData from '../assets/json/words.json';
import Letters from './Letters';
import Alphabet from './Alphabet';
import Modal from './Modal';
import Modes from './utils/modes';

function Game() {
  const [openMenu, setOpenMenu] = useState(false);
  const [mode, setMode] = useState<Modes>(Modes.Playing);

  const [chosenWord, setChosenWord] = useState<string | null>(null);
  const [remainingLetters, setRemainingLetters] = useState<string>("");

  const [numRounds, setNumRounds] = useState<number>(0);
  
  const data: HangmanData = hangmanData;
  
  const location = useLocation();
  const category = location.state.category as keyof HangmanWords;
  
  useEffect(() => {
    if (location.state?.category) {
      const word = getRandomWord(category);
      setChosenWord(word);

      setRemainingLetters(word.replace(/_/g, ""));
    }
  }, [numRounds]);

  function getRandomWord(category: keyof HangmanWords): string {
    const words = data.words[category];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function verifyChosenLetter(element: any) {
    const letter = element.target.innerHTML.toLowerCase();

    if(chosenWord?.includes(letter)) {
      showLetter(letter);

      if(isGameWon(letter)) gameOver(Modes.Won);
      
    } else {
      decreaseHealth();
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

  function isGameWon(letter: string) {
    const regex = new RegExp(letter, "g");

    const updatedRemainingLetters = remainingLetters.replace(regex, "");

    setRemainingLetters(updatedRemainingLetters);

    if(updatedRemainingLetters.length === 0) return true;
    else return false;
  }

  function decreaseHealth() {
    const progress = document.querySelector('progress');

    if(progress) { 
      progress.value = Math.max(progress.value - 15, 0);

      if(progress.value === 0) {
        gameOver(Modes.Lost);
      }
    }
  }

  function changeHealth(health: number) {
    const progress = document.querySelector('progress');

    if(progress) progress.value = health;
  }

  function disableButton(element: any) {
    element.target.disabled = true;
  }

  function enableAllButtons() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
      button.disabled = false;
    })
  }

  function gameOver(gameOverType: Modes) {
    chosenWord?.split("").forEach(letter => {
      showLetter(letter);
    })

    setMode(gameOverType);

    setTimeout(() => {
      setOpenMenu(true);
    }, 2000)
  }

  function resetGame(): void {
    setNumRounds((n) => n + 1);
    setMode(Modes.Playing);
    enableAllButtons();
    changeHealth(100);
  }

  return (
    <div className="min-h-svh bg-gradient-to-b from-black_rock to-deep_koamaru">
      <div className="min-h-svh flex flex-col justify-between gap-14 px-6 pt-6 pb-8 sm:px-14 sm:py-5 lg:px-28 lg:pt-8">
        <div className="w-full flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-10">
            <Modal openMenu={openMenu} setOpenMenu={setOpenMenu} mode={mode} playAgain={resetGame}/>
            <h1 className="text-5xl lg:text-8xl text-white bg-clip-text capitalize">{category.replace("_", " ")}</h1>
          </div>
          <div className="flex items-center gap-4 sm:gap-7">
            <progress value="100" max="100" className="w-16 sm:w-24 h-3 sm:h-[0.85rem] bg-white rounded-full p-[2px]"></progress>
            <img src={heart} alt="heart" className="w-10 sm:w-14" />
          </div>
        </div>
        <Letters chosenWord={chosenWord} />
        <Alphabet onClick={verifyChosenLetter}/>
      </div>
    </div>
  );
}

export default Game;
