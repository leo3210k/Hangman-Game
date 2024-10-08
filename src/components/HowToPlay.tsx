import React from 'react';
import { Link } from "react-router-dom";

import back from '../assets/images/icons/icon-back.svg';
import { useTranslation } from 'react-i18next';

function HowToPlay() {
  const { t } = useTranslation();

  const ItemList = ({ number, title, text }: { number: string, title: string, text: string }) => {
    return (
      <div className="lg:w-full flex flex-col sm:flex-row lg:justify-center sm:items-center gap-4 sm:gap-8 bg-white rounded-3xl sm:rounded-[2.5rem] p-8 lg:py-10">
        <h2 className="hidden sm:block lg:hidden sm:text-8xl text-blue_ribbon">{ number }</h2>
        <div className="flex sm:flex-col items-center sm:items-start lg:items-center gap-8 sm:gap-4 lg:gap-12">
          <h2 className="text-2xl sm:hidden lg:block lg:text-8xl text-blue_ribbon">{ number }</h2>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl text-center text-deep_koamaru tracking-wide uppercase">{ t(`${title}`) }</h3>
          <span className="hidden sm:block lg:w-[16.5rem] text-xl lg:text-2xl lg:text-center text-purple_mountains_majesty tracking-wider leading-6">{ t(`${text}`) }</span>
        </div>
        <span className="sm:hidden text-purple_mountains_majesty tracking-wider leading-5">{ t(`${text}`) }</span>
      </div>
    )
  }

  return (
    <div className="min-h-svh bg-mobile sm:bg-tablet lg:bg-desktop bg-center bg-cover">
      <div className="flex flex-col gap-14 sm:gap-20 bg-gradient-to-b from-black_rock to-deep_koamaru px-6 pt-6 pb-8 sm:px-16 lg:px-28 lg:pt-8">
        <div className="w-full flex justify-between sm:justify-normal items-center sm:gap-16 lg:gap-0">
          <Link to="/">
            <button className="flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full shadow-howtoplay_back p-3 sm:p-4">
              <img src={back} alt="back" className="w-6 sm:w-10" />
            </button>
          </Link>
          <h1 className="text-5xl sm:text-[6.5rem] lg:text-[8rem] lg:flex-1 lg:text-center text-transparent bg-clip-text tracking-wider sm:tracking-normal bg-gradient-to-b from-malibu to-white">How to Play</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <ItemList number="01" title="Pick a category" text="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."/>
          <ItemList number="02" title="Guess letters" text="Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."/>
          <ItemList number="03" title="Win or lose" text="You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."/>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
