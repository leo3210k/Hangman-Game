import React from "react";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "./utils/dialog";
import menu from "../assets/images/icons/icon-menu.svg";
import Modes from "./utils/modes";

interface ModalProps {
  openMenu: boolean; 
  setOpenMenu: any; 
  mode: Modes; 
  playAgain: any;
}

function Modal({ openMenu, setOpenMenu, mode, playAgain }: ModalProps) {
  function currentTitle() {
    if (mode === Modes.Playing) return "Pause";
    else if (mode === Modes.Lost) return "You Lose";
    else return "You Won";
  }

  return (
    <Dialog open={openMenu} onOpenChange={setOpenMenu}>
      <DialogTrigger asChild>
        <button className="flex justify-center items-center bg-gradient-to-b from-blush_pink to-malibu rounded-full shadow-howtoplay_back p-3 sm:p-4">
          <img src={menu} alt="menu" className="w-6 sm:w-10" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-[80%] bg-gradient-to-b from-governor_bay to-governor_bay_transparent shadow-home_container rounded-[4.5rem] py-28">
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle className="absolute text-8xl font-normal text-transparent tracking-wide bg-gradient-to-b from-malibu to-white bg-clip-text top-0 -mt-14">
            {currentTitle()}
          </DialogTitle>
          <DialogDescription className="flex flex-col items-center gap-14">
            {mode === Modes.Lost || mode === Modes.Won ? (
              <DialogClose asChild>
                <button onClick={() => playAgain()} className="text-4xl text-white tracking-wide bg-blue_ribbon shadow-home_how rounded-full uppercase px-7 py-3">
                  play again
                </button>
              </DialogClose>
            ) : (
              <DialogClose asChild>
                <button className="text-4xl text-white tracking-wide bg-blue_ribbon shadow-home_how rounded-full uppercase px-7 py-3">
                  continue
                </button>
              </DialogClose>
            )}
            <Link to="/pickcategory">
              <button className="text-4xl text-white tracking-wide bg-blue_ribbon shadow-home_how rounded-full uppercase px-7 py-3">
                new category
              </button>
            </Link>
            <Link to="/">
              <button className="text-4xl text-white tracking-wide bg-gradient-to-b from-blush_pink to-malibu shadow-home_play rounded-full uppercase px-7 py-3">
                quit game
              </button>
            </Link>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
