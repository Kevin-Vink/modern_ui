import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'react-feather';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div className="bg-woodsmoke w-full h-[200vh]">
      <Header />
      <div className="w-full min-h-screen flex flex-col">

        <div className="w-full h-full max-w-3/4 m-auto flex-1 flex flex-col items-center justify-evenly">
          <div className="w-full h-full flex flex-col justify-center items-center gap-y-8">
            <h1 className="text-7xl text-neutral-100 font-bold max-w-[45rem] text-center">
              Simple UI Designs for Web
              Developers
            </h1>
            <h2 className="text-2xl text-gray-300 max-w-[35rem] text-center">
              Captivate Your Audience with Beautifully
              Crafted Design Solutions from Our Expert Team
            </h2>
            <Button text="Start exploring for Free" styling="!text-lg !py-2 !px-6" />
          </div>

          <div className="w-full h-full flex flex-col items-center justify-center gap-y-6">
            <div className="w-full h-full flex flex-row items-center relative">
              <div className="bg-woodsmoke rounded-2xl w-full h-full overflow-auto relative translate-x-20">
                <div className="absolute z-10 top-0 left-0 w-full h-full bg-woodsmoke/75" />
                <div
                  className="w-full rounded-2xl z-0 text-white p-8 w-full h-[23rem] flex flex-col gap-y-2 justify-between group bg-cover relative cursor-pointer shadow-slide-drop"
                  style={{ backgroundImage: 'url(./images/1.jpg)' }}
                >
                  <div className="absolute z-10 top-0 left-0 w-full h-full shadow-slide" />
                  <div className="flex flex-col gap-y-12 max-w-[14rem]">
                    <span className="py-1 px-2 group-hover:bg-blue-600 transition-colors font-medium tracking-widest w-fit text-xs bg-blue-700 uppercase">
                      industry update
                    </span>
                    <p className="font-bold text-3xl">New UX guide for designers</p>
                  </div>
                  <a className="font-medium inline-flex items-center group-hover:gap-x-3 transition-all gap-x-2 z-10 relative" href="https://google.com">
                    Learn about New UX Guide
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
              <div className="bg-woodsmoke rounded-2xl w-full h-full overflow-auto relative">
                <div className="absolute z-20 top-0 left-0 w-full h-full bg-woodsmoke/15 pointer-events-none" />
                <div
                  className="w-full z-10 text-white p-8 w-full h-[28rem] flex flex-col gap-y-2 justify-between group bg-cover relative cursor-pointer shadow-slide-drop"
                  style={{ backgroundImage: 'url(./images/2.jpg)' }}
                >
                  <div className="absolute z-10 top-0 left-0 w-full h-full shadow-slide" />
                  <div className="flex flex-col gap-y-12 max-w-[14rem]">
                    <span className="py-1 px-2 group-hover:bg-blue-600 transition-colors font-medium tracking-widest w-fit text-xs bg-blue-700 uppercase">
                      product update
                    </span>
                    <p className="font-bold text-3xl">Announcing CSS class library</p>
                  </div>
                  <a className="font-medium inline-flex items-center group-hover:gap-x-3 transition-all gap-x-2 z-10 relative" href="https://google.com">
                    Learn about Class Library
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
              <div className="bg-woodsmoke rounded-2xl w-full h-full overflow-auto relative -translate-x-20">
                <div className="absolute z-10 top-0 left-0 w-full h-full bg-woodsmoke/75" />
                <div
                  className="w-full z-0 text-white p-8 w-full h-[23rem] flex flex-col gap-y-2 justify-between group bg-cover relative cursor-pointer  shadow-slide-drop"
                  style={{ backgroundImage: 'url(./images/3.jpg)' }}
                >
                  <div className="absolute z-10 top-0 left-0 w-full h-full shadow-slide" />
                  <div className="flex flex-col gap-y-12 max-w-[14rem]">
                    <span className="py-1 px-2 group-hover:bg-blue-600 transition-colors font-medium tracking-widest w-fit text-xs bg-blue-700 uppercase">
                      new product
                    </span>
                    <p className="font-bold text-3xl">Install the new dribbble app</p>
                  </div>
                  <a className="font-medium inline-flex items-center group-hover:gap-x-3 transition-all gap-x-2 z-10 relative" href="https://google.com">
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
          <div className="w-8 h-14 border border-white rounded-full relative flex justify-center p-3">
            <span className="w-[2.5px] h-3 rounded-full bg-white absolute animate-scroll" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
