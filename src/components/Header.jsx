import React, { useState } from 'react';
import {
  Aperture,
  ChevronDown,
  Database,
  Grid,
  Layers,
  Monitor,
  Package,
  PenTool,
  Play,
  Smartphone,
  Tag,
} from 'react-feather';
import Button from './Button';
import MenuItem from './MenuItem';
import useScrollPosition from '../hooks/useScrollPosition';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <header className="w-full z-50 sticky xl:!h-auto py-4 top-0 left-0 flex flex-col">
        <div className={`absolute top-0 left-0 right-0 bottom-auto z-[-1] h-full w-full 
        transition-colors duration-300 pointer-events-none 
          ${showMenu ? 'h-screen bg-woodsmoke/95' : ''}  
          ${scrollPosition > 0 ? 'blur-bg-md xl:!bg-woodsmoke/70 bg-woodsmoke/70 ' : ''}`}
        />

        <div className="max-w-9/10 xl:max-w-3/4 m-auto flex w-full items-center justify-between">
          <button
            type="button"
            tabIndex={0}
            className="hidden xl:block absolute text-sm top-20 focus:top-24 font-medium
        transition-all left-1/2 -translate-x-1/2 text-white bg-blue-600 rounded px-10 py-1.5
        opacity-0 pointer-events-none focus:pointer-events-auto focus:opacity-100"
          >
            Skip to content (Press Enter)
          </button>
          <div className="flex z-30 flex-row items-center gap-x-2 group">
            <Aperture
              className="stroke-blue-500 group-hover:rotate-180
          duration-700 ease-in-out transition-transform"
              strokeWidth={1}
              size={30}
            />
            <h1 className="font-medium text-xl text-white">UIfy</h1>
          </div>
          <div>
            <ul className="relative hidden xl:flex flex-row gap-x-10 items-center">
              <li className="text-sm text-white font-medium tracking-wide
            cursor-pointer flex items-center gap-x-1 group"
              >
                Products
                <ChevronDown className="group-hover:rotate-180 transition-transform" size={20} />

                <div className="absolute top-10 invisible group-hover:visible transition-all rounded-xl
              bg-woodsmoke-400 flex flex-col gap-y-2 p-4 before:w-5 before:h-5
              before:absolute before:-top-1 before:left-[3.75rem] before:bg-woodsmoke-400 before:rotate-45"
                >
                  <h2>New</h2>
                  <div className="grid grid-cols-2 text-white gap-4 w-full">
                    <MenuItem text="UI Components" icon={<Grid />} />
                    <MenuItem text="Class Library" icon={<Layers />} />
                    <MenuItem text="Inspiration" icon={<Database />} />
                    <MenuItem text="Mobile App" icon={<Smartphone />} isNew />
                  </div>
                </div>
              </li>
              <li className="text-sm text-white font-medium tracking-wide
            cursor-pointer flex items-center gap-x-1 group"
              >
                Solutions
                <ChevronDown className="group-hover:rotate-180 transition-transform" size={20} />
              </li>
              <li className="text-sm text-white font-medium tracking-wide
            cursor-pointer flex items-center gap-x-1 group"
              >
                Company
                <ChevronDown className="group-hover:rotate-180 transition-transform" size={20} />
              </li>

              <li className="text-sm text-white font-medium tracking-wide cursor-pointer
            hover:text-blue-400 focus:text-blue-400 transition-colors"
              >
                Customers
              </li>
              <li className="text-sm text-white font-medium tracking-wide cursor-pointer
            hover:text-blue-400 focus:text-blue-400 transition-colors"
              >
                Pricing
              </li>
              <li className="text-sm text-white font-medium tracking-wide cursor-pointer
            hover:text-blue-400 focus:text-blue-400 transition-colors"
              >
                Blog
              </li>
            </ul>
          </div>

          <div className="hidden xl:flex z-30 flex-row gap-x-4 items-center">
            {isAuthenticated ? (
              <Button text="Go to account" />
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setIsAuthenticated(true)}
                  className="text-sm text-white font-medium hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Log In
                </button>
                <Button onClick={() => setIsAuthenticated(true)} text="Sign Up" />
              </>
            )}
          </div>

          <div className="flex xl:hidden gap-x-4 sm:gap-x-6 md:gap-x-10">
            <Button text="Sign Up" />
            <button
              type="button"
              name="menu"
              aria-label="menu"
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
    </div>

  );
}

export default Header;
