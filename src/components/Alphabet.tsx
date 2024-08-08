import React from 'react';

import { alphabet } from './utils/alphabet';

function Alphabet({ onClick }: { onClick: any }) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-3">
      {alphabet.map((letter, i) => {
        return (
          <button className="text-2xl text-deep_koamaru bg-white rounded-full px-4 py-3" key={i + letter}
            onClick={e => onClick(e)}>
            {letter}
          </button>
        )
      })}
    </div>
  );
}

export default Alphabet;
