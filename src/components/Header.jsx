import React, { useState } from 'react';
import {
  Aperture, ChevronDown, Database, Grid, Layers, Monitor, Package, PenTool, Play, Smartphone, Tag,
} from 'react-feather';
import Button from './Button';
import MenuItem from './MenuItem';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`w-full z-30 fixed ${showMenu && 'h-screen bg-woodsmoke/95'} xl:!h-auto py-4 bg-woodsmoke/70 
      xl:!bg-woodsmoke/70 top-0 left-0 flex flex-col`}
    >
      <div className="max-w-9/10 xl:max-w-3/4 m-auto flex w-full items-center justify-between">
        <button
          type="button"
          tabIndex={0}
          className="hidden xl:block absolute text-sm top-16 focus:top-20 font-medium
        transition-all left-1/2 -translate-x-1/2 text-white bg-blue-600 rounded px-10 py-1.5
        opacity-0 pointer-events-none focus:pointer-events-auto focus:opacity-100"
        >
          Skip to content (Press Enter)
        </button>
        <div className="flex flex-row items-center gap-x-2">
          <Aperture className="stroke-blue-500" strokeWidth={1} size={30} />
          <h1 className="font-medium text-xl text-white">UIfy</h1>
        </div>
        <div>
          <ul className="hidden xl:flex flex-row gap-x-10 items-center">
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

        <div className="hidden xl:flex flex-row gap-x-4 items-center">
          <p className="text-sm text-white font-medium hover:text-blue-400 transition-colors cursor-pointer">Log In</p>
          <Button text="Sign Up" />
        </div>

        {/* <div className="flex xl:hidden gap-x-4 md:gap-x-10"> */}
        {/*  <Button text="Sign Up" /> */}
        {/*  {showMenu ? ( */}
        {/*    <X onClick={() => setShowMenu(false)} className="stroke-white" size={30} /> */}
        {/*  ) : ( */}
        {/*    <Menu onClick={() => setShowMenu(true)} className="stroke-white" size={30} /> */}
        {/*  )} */}
        {/* </div> */}

        <div className="flex xl:hidden gap-x-4 sm:gap-x-6 md:gap-x-10">
          <Button text="Sign Up" />
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            className="flex flex-col justify-center gap-y-2 items-center relative w-10"
          >
            <span
              className={`h-0.5 bg-white rounded-full transition-transform w-8 
              ${showMenu ? 'rotate-45 absolute' : ''}`}
            />
            <span
              className={`h-0.5 bg-white rounded-full transition-transform w-8 
              ${showMenu ? '-rotate-45 absolute' : ''}`}
            />
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="xl:hidden flex max-w-9/10 xl:max-w-3/4 m-auto py-8 flex-col gap-y-4 w-full h-full">
          <div className="gap-y-2 flex flex-col">
            <h3 className="text-white font-medium tracking-wide cursor-pointer flex items-center">
              Products
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 text-white gap-4">
              <MenuItem text="UI Components" icon={<Grid />} />
              <MenuItem text="Class Library" icon={<Layers />} />
              <MenuItem text="Inspiration" icon={<Database />} />
              <MenuItem text="Mobile App" icon={<Smartphone />} isNew />
            </div>
          </div>
          <div className="gap-y-2 flex flex-col">
            <h3 className="text-white font-medium tracking-wide cursor-pointer flex items-center">
              Solutions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 text-white gap-4">
              <MenuItem text="Web Design" icon={<Monitor />} />
              <MenuItem text="Animation" icon={<Play />} />
              <MenuItem text="Branding" icon={<Tag />} />
              <MenuItem text="Illustration" icon={<PenTool />} />
              <MenuItem text="Product Design" icon={<Package />} isNew />
              <MenuItem text="Mobile" icon={<Smartphone />} />
            </div>
          </div>
          <div className="gap-y-2 flex flex-col">
            <h3 className="text-white font-medium tracking-wide cursor-pointer flex items-center">
              Company
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <p className="text-neutral-400 text-sm bg-woodsmoke-400 text-center rounded-md p-2
              hover:text-blue-400 focus:text-blue-400 transition-colors"
              >
                About UIfy
              </p>
              <p className="text-neutral-400 text-sm bg-woodsmoke-400 text-center rounded-md p-2
              hover:text-blue-400 focus:text-blue-400 transition-colors"
              >
                Careers
              </p>
              <p className="text-neutral-400 text-sm bg-woodsmoke-400 text-center rounded-md p-2
              hover:text-blue-400 focus:text-blue-400 transition-colors"
              >
                Education
              </p>
              <p className="text-neutral-400 text-sm bg-woodsmoke-400 text-center rounded-md p-2
              hover:text-blue-400 focus:text-blue-400 transition-colors col-span-2"
              >
                Sustainability
              </p>
              <p className="text-neutral-400 text-sm bg-woodsmoke-400 text-center rounded-md p-2
              hover:text-blue-400 focus:text-blue-400 transition-colors"
              >
                Contact
              </p>
            </div>
          </div>
          <h3 className="text-white font-medium hover:text-blue-400 focus:text-blue-400
          transition-colors"
          >
            Customers
          </h3>
          <h3 className="text-white font-medium hover:text-blue-400 focus:text-blue-400
          transition-colors"
          >
            Pricing
          </h3>
          <h3 className="text-white font-medium hover:text-blue-400 focus:text-blue-400
          transition-colors"
          >
            Blog
          </h3>
        </div>
      )}
    </header>
  );
}

export default Header;
