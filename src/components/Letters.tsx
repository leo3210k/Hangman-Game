import React from 'react';

function Letters({ randomMovie }: { randomMovie: string }) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {randomMovie.split("_").map((word, i) => {
        return (
          <div className="flex flex-wrap gap-2" key={word + i}>
            {word.split("").map((letter, i) => {
              return (
                <div className="animation text-4xl text-transparent bg-blue_ribbon rounded-full shadow-category uppercase px-4 py-4" key={letter + i}
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
