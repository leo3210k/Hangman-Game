import React from 'react';
import { Link } from 'react-router-dom';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./utils/dialog"
import menu from '../assets/images/icons/icon-menu.svg'; 

function Modal({ open, setOpen }: { open: boolean, setOpen: any }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full shadow-howtoplay_back p-3">
          <img src={menu} alt="menu" className="w-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-[80%] bg-gradient-to-b from-governor_bay to-governor_bay_transparent shadow-home_container rounded-[4.5rem] py-32">
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle className="absolute text-8xl text-transparent tracking-wide bg-gradient-to-b from-malibu to-white bg-clip-text top-0 -mt-14">You Lose</DialogTitle>
          <DialogDescription>
            <Link to="/howtoplay">
              <button className="text-4xl text-white tracking-wide bg-blue_ribbon shadow-home_how rounded-full uppercase px-6 py-3">
                play again
              </button>
            </Link>
            <Link to="/pickcategory">
              <button className="text-4xl text-white tracking-wide bg-blue_ribbon shadow-home_how rounded-full uppercase px-6 py-3">
                new category
              </button>
            </Link>
            <Link to="/howtoplay">
              <button className="text-4xl text-white tracking-wide bg-blue_ribbon shadow-home_how rounded-full uppercase px-6 py-3">
                quit game
              </button>
            </Link>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
