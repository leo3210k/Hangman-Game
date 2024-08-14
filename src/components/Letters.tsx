import React from 'react';

function Letters({ chosenWord }: { chosenWord: string | null }) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-y-4 sm:gap-y-6 gap-x-6 sm:gap-x-8">
      {chosenWord?.split("_").map((word, i) => {
        return (
          <div className="flex flex-wrap gap-2 sm:gap-4" key={word + i}>
            {word.split("").map((letter, i) => {
              return (
                <div className="animation sm:w-[4.25rem] sm:h-[6.25rem] text-4xl sm:text-6xl text-transparent bg-blue_ribbon rounded-full shadow-category uppercase px-4 sm:px-0 py-4 sm:py-0" key={letter + i}
                  data-letter={letter}>
                  {letter}
                </div>
              )
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Letters;
