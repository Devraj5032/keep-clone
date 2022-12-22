import React from "react";
import {
  ArrowPathIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  Cog6ToothIcon,
  MagnifyingGlassCircleIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import logo from "../Images/logo.png";
import { auth } from "../firebase";

function Header(props) {


  return (
    <div className="h-[10vh] bg-[rgba(32,33,36,1)] flex text-white justify-between items-center border-b-2 border-b-[#323438]">
      <div className="flex space-x-5 w-[70%] items-center justify-start">
        <Bars3Icon className="h-12 md:h-10 lg:h-10 text-white pl-6 cursor-pointer" onClick={props.showSidebar}/>
        <img src={logo} alt="" />
        <h1 className="text-xl">Keep</h1>
        <div className="lg:flex lg:space-x-7 lg:h-16 lg:w-[100%] lg:rounded-lg lg:bg-[#323438] lg:text-white lg:items-center
        md:flex md:space-x-7 md:h-16 md:w-[100%] md:rounded-lg md:bg-[#323438] md:text-white md:items-center">
          <MagnifyingGlassCircleIcon className="hidden md:inline lg:inline  md:h-9 md:pl-7 lg:h-9 lg:pl-7 "/>
        <input
          type="search"
          className="hidden md:inline lg:inline md:text-white md:h-16 md:w-[100%] md:rounded-lg md:bg-[#323438] lg:text-white lg:h-16 lg:w-[100%] lg:rounded-lg lg:bg-[#323438] "
          placeholder="Search"
        />
        </div>
      </div>
      <div className="flex space-x-5 items-center justify-center">
      <MagnifyingGlassCircleIcon className="h-7 md:hidden lg:hidden "/>
        <ArrowPathIcon className="h-7 " />
        <QueueListIcon className="h-7" />
        <Cog6ToothIcon className="h-7" />
        <ArrowRightOnRectangleIcon className="h-7 cursor-pointer" onClick={() => auth.SignOut()}/>
      </div>
    </div>
  );
}

export default Header;
