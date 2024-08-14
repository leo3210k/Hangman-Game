import React from 'react';

import { alphabet } from './utils/alphabet';

function Alphabet({ onClick }: { onClick: any }) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-3">
      {alphabet.map((letter, i) => {
        return (
          <button className="text-2xl sm:text-4xl text-deep_koamaru bg-white rounded-full sm:rounded-[2.4rem] px-4 sm:px-8 py-3 sm:py-8" key={i + letter}
            onClick={e => onClick(e)}>
            {letter}
          </button>
        )
      })}
    </div>
  );
}

export default Alphabet;
