import React from 'react';
import { Link } from "react-router-dom";

import back from '../assets/images/icons/icon-back.svg';

function HowToPlay() {
  const ItemList = ({ number, title, text }: { number: string, title: string, text: string }) => {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-white rounded-3xl sm:rounded-[2.5rem] p-8">
        <h2 className="hidden sm:block lg:hidden sm:text-8xl text-blue_ribbon">{ number }</h2>
        <div className="flex sm:flex-col items-center sm:items-start lg:items-center gap-8 sm:gap-4">
          <h2 className="text-2xl sm:hidden lg:block lg:text-8xl text-blue_ribbon">{ number }</h2>
          <h3 className="text-2xl sm:text-4xl text-deep_koamaru tracking-wide uppercase">{ title }</h3>
          <span className="hidden sm:block lg:w-[15rem] text-xl lg:text-center text-purple_mountains_majesty tracking-wider leading-6">{ text }</span>
        </div>
        <span className="sm:hidden text-purple_mountains_majesty tracking-wider leading-5">{ text }</span>
      </div>
    )
  }

  return (
    <div className="min-h-svh bg-mobile sm:bg-tablet bg-center bg-cover">
      <div className="flex flex-col gap-14 sm:gap-20 bg-gradient-to-b from-black_rock to-deep_koamaru px-6 sm:px-16 pt-6 pb-8">
        <div className="w-full flex justify-between sm:justify-normal items-center sm:gap-16">
          <Link to="/">
            <button className="flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full shadow-howtoplay_back p-3 sm:p-4">
              <img src={back} alt="back" className="w-6 sm:w-10" />
            </button>
          </Link>
          <h1 className="text-5xl sm:text-[6.5rem] text-transparent bg-clip-text tracking-wider sm:tracking-normal bg-gradient-to-b from-malibu to-white">How to Play</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <ItemList number="01" title="Pick a category" text="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."/>
          <ItemList number="02" title="Guess letters" text="Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."/>
          <ItemList number="03" title="win or lose" text="You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."/>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
