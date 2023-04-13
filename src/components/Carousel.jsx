import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Slide from './Slide';
import slidesData from '../slides.json';

function Carousel() {
  const [slide, setSlide] = useState(2);
  const [slides] = useState(slidesData);

  const handleNext = () => {
    if (slide >= slides.length) {
      setSlide(1);
      return;
    }
    setSlide((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (slide === 1) {
      setSlide(slides.length);
      return;
    }
    setSlide((prev) => prev - 1);
  };

  return (
    <div className="overflow-hidden w-full h-full flex flex-col items-center justify-center gap-y-6">
      <div className="h-full flex items-center">
        {slides.map((data, index) => (
          <Slide
            key={data.title}
            index={index + 1}
            setSlide={setSlide}
            slides={slides.length}
            currentSlide={slide}
            label={data.label}
            cta={data.cta}
            title={data.title}
            image={data.image}
          />
        ))}
      </div>

      <div className="flex flex-row items-center gap-x-3">
        <ChevronLeft
          className="stroke-gray-400 z-10 cursor-pointer hover:stroke-white hover:scale-105 transition-colors"
          onClick={() => handlePrevious()}
          strokeWidth={1.5}
          size={40}
        />
        <ChevronRight
          className="stroke-gray-400 z-10 cursor-pointer hover:stroke-white hover:scale-105 transition-colors"
          onClick={() => handleNext()}
          strokeWidth={1.5}
          size={40}
        />
      </div>
    </div>
  );
}

export default Carousel;
