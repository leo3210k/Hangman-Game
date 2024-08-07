import React from 'react';

import back from '../assets/images/icons/icon-back.svg';

function HowToPlay() {
  const ItemList = ({ number, title, text }: { number: string, title: string, text: string }) => {
    return (
      <div className="flex flex-col gap-4 bg-white rounded-3xl p-8">
        <div className="flex items-center gap-8">
          <h2 className="text-2xl text-blue_ribbon">{ number }</h2>
          <h3 className="text-2xl text-governor_bay tracking-wide uppercase">{ title }</h3>
        </div>
        <span className="text-purple_mountains_majesty tracking-wider leading-5">{ text }</span>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col gap-10 bg-mobile bg-center bg-cover px-6 pt-6">
      <div className="w-full flex justify-between items-center">
        <button className="flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full shadow-howtoplay_back p-3">
          <img src={back} alt="back" className="w-6" />
        </button>
        <h1 className="text-5xl text-transparent bg-clip-text tracking-wider bg-gradient-to-b from-malibu to-white capitalize">how to play</h1>
      </div>
      <div className="flex flex-col gap-6">
        <ItemList number="01" title="Pick a category" text="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."/>
        <ItemList number="02" title="Guess letters" text="Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."/>
        <ItemList number="03" title="win or lose" text="You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."/>
      </div>
    </div>
  );
}

export default HowToPlay;
