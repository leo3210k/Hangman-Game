import React from 'react';

import { alphabet } from './utils/alphabet';
import { motion } from 'framer-motion';

function Alphabet({ onClick }: { onClick: any }) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-5">
      {alphabet.map((letter, i) => {
        return (
          <motion.button className="text-2xl sm:text-5xl text-deep_koamaru hover:text-white sm:font-medium bg-white hover:bg-blue_ribbon rounded-full sm:rounded-[1.5rem] px-4 py-3 sm:px-7 sm:py-4 lg:px-14" key={i + letter}
          onClick={e => onClick(e)}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            {letter}
          </motion.button>
        )
      })}
    </div>
  );
}

export default Alphabet;
