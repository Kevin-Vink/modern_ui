import React, { useState } from 'react';
import {
  Aperture, ChevronDown, Menu, X,
} from 'react-feather';
import Button from './Button';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full z-30 h-auto py-4 bg-woodsmoke/70
     backdrop-blur-md sticky relative top-0 left-0"
    >
      <div className="max-w-3/4 m-auto flex items-center justify-between">
        <button
          type="button"
          tabIndex={0}
          className="absolute text-sm top-16 focus:top-20 font-medium focus:pointer-events-auto focus:opacity-100
        transition-all left-1/2 -translate-x-1/2 text-white bg-blue-600 rounded px-10 py-1.5
        opacity-0 pointer-events-none"
        >
          Skip to content (Press Enter)
        </button>
        <div className="flex flex-row items-center gap-x-2">
          <Aperture className="stroke-blue-500" strokeWidth={1} size={30} />
          <h1 className="font-medium text-xl text-white">UIfy</h1>
        </div>
        <div>
          <ul className="hidden lg:flex flex-row gap-x-10 items-center">
            <li className="text-sm text-white font-medium tracking-wide cursor-pointer flex items-center gap-x-1">
              Products
              <ChevronDown size={20} />
            </li>
            <li className="text-sm text-white font-medium tracking-wide cursor-pointer flex items-center gap-x-1">
              Solutions
              <ChevronDown size={20} />
            </li>
            <li className="text-sm text-white font-medium tracking-wide cursor-pointer flex items-center gap-x-1">
              Company
              <ChevronDown size={20} />
            </li>

            <li className="text-sm text-white font-medium tracking-wide cursor-pointer">Customers</li>
            <li className="text-sm text-white font-medium tracking-wide cursor-pointer">Pricing</li>
            <li className="text-sm text-white font-medium tracking-wide cursor-pointer">Blog</li>
          </ul>
        </div>
        <div className="hidden lg:flex flex-row gap-x-4 items-center">
          <p className="text-sm text-white font-medium hover:text-blue-400 transition-colors cursor-pointer">Log In</p>
          <Button text="Sign Up" />
        </div>

        <div className="flex lg:hidden">
          {showMenu ? (
            <X onClick={() => setShowMenu(false)} className="stroke-white" size={30} />
          ) : (
            <Menu onClick={() => setShowMenu(true)} className="stroke-white" size={30} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
