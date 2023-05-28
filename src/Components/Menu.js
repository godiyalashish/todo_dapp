import React from "react";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import {share2} from 'react-icons-kit/icomoon/share2'

const Menu = () => {
  return (
    <div className="w-1/6 border-r-2 border-[#242731] flex flex-col items-start p-2">
      <div className="flex items-start p-2 mb-3">
        <div className="font-bold bg-[#3772FF] text-white rounded-full h-7 w-7 text-center flex items-center justify-center">
          N
        </div>
        <p className="text-xl font-bold text-white ml-1">Name</p>
      </div>
      <ul className="text-[#808191] m-2 flex gap-x-2 items-center">
        <Icon icon={home} className="pb-2"/>
        <p>Home</p>
      </ul>
      <ul className="text-[#808191] m-2 flex gap-x-2 items-center">
        <Icon icon={share2} className="pb-2"/>
        <p>Section 1</p>
      </ul>
      <ul className="text-[#808191] m-2 flex gap-x-2 items-center">
        <Icon icon={share2} className="pb-2"/>
        <p>Section 1</p>
      </ul>
      <ul className="text-[#808191] m-2 flex gap-x-2 items-center">
        <Icon icon={share2} className="pb-2"/>
        <p>Section 1</p>
      </ul>
    </div>
  );
};

export default Menu;
