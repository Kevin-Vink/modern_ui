import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="bg-woodsmoke w-full h-full">
      <Header />
      <div className="w-full h-full min-h-screen flex flex-col">

        <div className="w-full h-full flex-1 flex flex-col items-center justify-between 2xl:justify-evenly">
          <div className="w-full z-20 min-h-[75vh] 2xl:min-h-0 h-full flex flex-col
          justify-center items-center gap-y-8"
          >
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

          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default App;
