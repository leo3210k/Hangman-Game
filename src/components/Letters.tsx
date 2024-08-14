import React from 'react';

function Letters({ chosenWord }: { chosenWord: string | null }) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-y-4 gap-x-6">
      {chosenWord?.split("_").map((word, i) => {
        return (
          <div className="flex flex-wrap gap-2" key={word + i}>
            {word.split("").map((letter, i) => {
              return (
                <div className="animation text-4xl text-transparent bg-blue_ribbon rounded-full shadow-category uppercase px-4 sm:px-7 py-4 sm:py-8" key={letter + i}
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
