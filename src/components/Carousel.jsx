import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'react-feather';

function Carousel() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-6">
      <div className="w-full h-full flex items-center relative">
        <div className="w-slide h-fit relative translate-x-20">
          <div className="absolute z-10 top-0 left-0 w-full h-full bg-woodsmoke/75" />
          <div className="w-full rounded-2xl z-0 text-white p-8 h-[23rem] flex flex-col
          gap-y-2 justify-between group relative cursor-pointer shadow-slide-drop"
          >
            <div
              className="absolute z-10 top-0 left-0 w-full h-full bg-cover rounded-xl shadow-slide"
              style={{ backgroundImage: 'url(./images/1.jpg)' }}
            />
            <div className="flex z-20 flex-col gap-y-12 max-w-[14rem]">
              <span
                className="py-1 px-2 rounded group-hover:bg-blue-600 transition-colors font-medium
                tracking-widest w-fit text-xs bg-blue-700 uppercase"
              >
                industry update
              </span>
              <p className="font-bold text-3xl">New UX guide for designers</p>
            </div>
            <a
              className="font-medium inline-flex items-center group-hover:gap-x-3 transition-all gap-x-2 z-10 relative"
              href="https://google.com"
            >
              Learn about New UX Guide
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
        <div className="w-slide h-fit relative">
          <div className="absolute rounded-2xl z-20 top-0 left-0 w-full h-full bg-woodsmoke/15 pointer-events-none" />
          <div className="w-full z-10 text-white p-8 h-[28rem] flex flex-col
          gap-y-2 justify-between group relative cursor-pointer shadow-slide-drop"
          >
            <div
              className="absolute z-10 top-0 left-0 w-full h-full bg-cover rounded-2xl shadow-slide"
              style={{ backgroundImage: 'url(./images/2.jpg)' }}
            />
            <div className="flex z-20 flex-col gap-y-12 max-w-[14rem]">
              <span className="py-1 px-2 rounded group-hover:bg-blue-600 transition-colors
              font-medium tracking-widest w-fit text-xs bg-blue-700 uppercase"
              >
                product update
              </span>
              <p className="font-bold text-3xl">Announcing CSS class library</p>
            </div>
            <a
              className="font-medium inline-flex items-center group-hover:gap-x-3
            transition-all gap-x-2 z-10 relative"
              href="https://google.com"
            >
              Learn about Class Library
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
        <div className="w-slide h-fit relative -translate-x-20">
          <div className="absolute z-10 top-0 left-0 w-full h-full bg-woodsmoke/75" />
          <div className="w-full z-0 text-white p-8 h-[23rem] flex flex-col
          gap-y-2 justify-between group relative cursor-pointer shadow-slide-drop"
          >
            <div
              className="absolute z-10 top-0 left-0 w-full h-full bg-cover rounded-2xl shadow-slide"
              style={{ backgroundImage: 'url(./images/3.jpg)' }}
            />
            <div className="flex z-20 flex-col gap-y-12 max-w-[14rem]">
              <span className="py-1 px-2 rounded group-hover:bg-blue-600 transition-colors
              font-medium tracking-widest w-fit text-xs bg-blue-700 uppercase"
              >
                new product
              </span>
              <p className="font-bold text-3xl">Install the new dribbble app</p>
            </div>
            <a
              className="font-medium inline-flex items-center group-hover:gap-x-3
            transition-all gap-x-2 z-10 relative"
              href="https://google.com"
            >
              Learn about The App
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-x-3">
        <ChevronLeft
          className="stroke-gray-400 z-10 cursor-pointer hover:stroke-white hover:scale-105 transition-colors"
          strokeWidth={1.5}
          size={40}
        />
        <ChevronRight
          className="stroke-gray-400 z-10 cursor-pointer hover:stroke-white hover:scale-105 transition-colors"
          strokeWidth={1.5}
          size={40}
        />
      </div>
    </div>
  );
}

export default Carousel;
