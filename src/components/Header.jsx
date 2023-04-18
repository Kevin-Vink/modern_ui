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

import { Link } from 'react-router-dom';
import Button from './Button';
import MenuItem from './MenuItem';
import useScrollPosition from '../hooks/useScrollPosition';
import LargeMenuItem from './LargeMenuItem';
import Dropdown from './Dropdown';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <header className="w-full py-4 xl:py-0 z-50 sticky xl:!h-auto top-0 left-0 flex flex-col">
        <div className={`absolute top-0 left-0 right-0 bottom-auto z-[-1] h-full w-full 
        transition-colors duration-300 pointer-events-none 
          ${showMenu ? 'h-screen bg-woodsmoke/95' : ''}  
          ${scrollPosition > 0 ? 'blur-bg-md xl:!bg-woodsmoke/70 bg-woodsmoke/70 ' : ''}`}
        />

        <div className="max-w-9/10 xl:max-w-3/4 m-auto flex w-full items-center justify-between">
          <button
            type="button"
            tabIndex={0}
            className="hidden xl:block absolute text-sm top-18 focus:top-20 font-medium
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
          <ul className="relative hidden xl:flex flex-row gap-x-10 items-center">
            <li className="text-sm w-full h-full text-white font-medium tracking-wide
            cursor-pointer flex items-center gap-x-1 group mt-6 pb-6 relative"
            >
              Products
              <ChevronDown className="group-hover:rotate-180 transition-transform" size={20} />

              <Dropdown>
                <LargeMenuItem
                  text="UI Components"
                  description="Library of customizable UI components for web app development."
                  icon={<Grid />}
                  isPopular
                />

                <LargeMenuItem
                  text="Class Library"
                  description="Collection of reusable code and components to enhance functionality."
                  icon={<Layers />}
                />

                <LargeMenuItem
                  text="Inspiration"
                  description="Source of creative inspiration and design ideas."
                  icon={<Database />}
                />

                <LargeMenuItem
                  text="Mobile App"
                  description="Examples of mobile app development work and services offered."
                  icon={<Smartphone />}
                  isNew
                />

              </Dropdown>
            </li>
            <li className="text-sm w-full h-full text-white font-medium tracking-wide
                cursor-pointer flex items-center gap-x-1 group mt-6 pb-6 relative"
            >
              Solutions
              <ChevronDown className="group-hover:rotate-180 transition-transform" size={20} />

              <Dropdown>
                <LargeMenuItem
                  text="Web Design"
                  description="Showcase of functional and visually appealing websites."
                  icon={<Monitor />}
                />

                <LargeMenuItem
                  text="Animation"
                  description="Examples of captivating animated creations"
                  icon={<Play />}
                />

                <LargeMenuItem
                  text="Branding"
                  description="Help in establishing a strong and recognizable brand identity"
                  icon={<Tag />}
                />

                <LargeMenuItem
                  text="Illustration"
                  description="Creation of unique and captivating visuals"
                  icon={<PenTool />}
                />

                <LargeMenuItem
                  text="Product Design"
                  description="Bringing ideas to life through functional and aesthetically pleasing designs."
                  icon={<Package />}
                  isNew
                />

                <LargeMenuItem
                  text="Mobile"
                  description="Creation of user-friendly and engaging mobile applications"
                  icon={<Smartphone />}
                  isPopular
                />
              </Dropdown>
            </li>
            <li className="text-sm w-full h-full text-white font-medium tracking-wide
            cursor-pointer flex items-center gap-x-1 group mt-6 pb-6 relative"
            >
              Company
              <ChevronDown className="group-hover:rotate-180 transition-transform" size={20} />

              <div className="absolute left-12 top-full z-10 invisible
                group-hover:visible flex w-screen max-w-max -translate-x-1/2 px-4 before:w-5 before:h-5
              before:absolute before:-top-1 before:left-32 before:bg-woodsmoke-400 before:rotate-45"
              >
                <div className="w-screen max-w-[12rem] flex-auto overflow-hidden
                  rounded-xl bg-woodsmoke-400 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
                >
                  <div className="py-6 flex flex-col gap-y-2 justify-center items-center">
                    <Link to="1" className="hover:text-blue-500 transition-colors">About UIfy</Link>
                    <Link to="1" className="hover:text-blue-500 transition-colors">Careers</Link>
                    <Link to="1" className="hover:text-blue-500 transition-colors">Education</Link>
                    <Link to="1" className="hover:text-blue-500 transition-colors">Sustainability</Link>
                    <Link to="1" className="hover:text-blue-500 transition-colors">Contact</Link>
                  </div>
                </div>
              </div>
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
