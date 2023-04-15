import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Slide from './Slide';
import slidesData from '../slides.json';

const { REACT_APP_DURATION } = process.env;

function Carousel() {
  const [slide, setSlide] = useState(Math.ceil((slidesData.length / 2)));
  const [duration, setDuration] = useState(parseInt(REACT_APP_DURATION, 10));
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // The last 3 slides should be placed in the center of the array
    if (slidesData.length > 3) {
      // We grab the last 3 slides
      const lastThreeSlides = slidesData.slice(slidesData.length - 3);

      // The last slide in the array gets placed in the center of the array
      // The first slide in the array gets placed at the end of the array
      // The second slide in the array gets placed at the beginning of the array
      const centerSlides = [
        ...lastThreeSlides.slice(0, 1),
        ...lastThreeSlides.slice(2, 3),
        ...lastThreeSlides.slice(1, 2),
      ];

      // We grab the first slides of the array
      const firstSlides = slidesData.slice(0, slidesData.length - 3);
      // We find the center of the remaining array
      const center = Math.ceil(firstSlides.length / 2);
      // We place the three slides in the center of the array
      const orderedSlides = [
        ...firstSlides.slice(0, center),
        ...centerSlides,
        ...firstSlides.slice(center),
      ];

      setSlides(orderedSlides);
      return;
    }
    setSlides(slidesData);
  }, []);

  const handleNext = () => {
    if (slide >= slides.length) {
      setSlide(1);
      return;
    }
    setSlide(slide + 1);
  };

  const handlePrevious = () => {
    if (slide === 1) {
      setSlide(slides.length);
      return;
    }
    setSlide((prev) => prev - 1);
  };

  useEffect(() => {
    let interval;

    if (interval) clearInterval(interval);

    interval = setInterval(() => {
      setSlide(() => (slide === slides.length ? 1 : slide + 1));
    }, duration + 400);

    return () => clearInterval(interval);
  }, [slide, duration]);

  return (
    slides?.length > 2 && (
    <div className="overflow-x-clip w-full h-full flex flex-col items-center justify-center gap-y-6">
      <div className="h-full flex items-center">
        {slides.map((data, index) => (
          <Slide
            key={data.title}
            index={index + 1}
            setSlide={setSlide}
            setDuration={setDuration}
            center={Math.ceil(slides.length / 2)}
            slides={slides.length}
            duration={duration}
            currentSlide={slide}
            label={data.label}
            cta={data.cta}
            title={data.title}
            media={data.media}
            type={data.type}
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
    )
  );
}

export default Carousel;
