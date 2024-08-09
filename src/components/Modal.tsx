import React from 'react';

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
      <DialogContent className="w-[80%] bg-gradient-to-b from-governor_bay to-governor_bay_transparent">
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle className="absolute text-6xl text-transparent tracking-wide uppercase bg-gradient-to-b from-malibu to-white bg-clip-text -mt-32">you lose</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
