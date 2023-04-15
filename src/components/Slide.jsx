import React, { useEffect, useState } from 'react';
import { ArrowRight, Pause, Play } from 'react-feather';
import { useSwipeable } from 'react-swipeable';
import useSlideWidth from '../hooks/useSlideWidth';

const Types = {
  Image: 'image',
  Video: 'video',
};

const { REACT_APP_DURATION } = process.env;
function Slide({
  label, title, cta, image, index, currentSlide, setSlide, center, slides, type, setDuration, duration,
}) {
  const slideWidth = useSlideWidth();
  const [isPlaying, setIsPlaying] = useState(false);

  const offset = 40;

  function translateSlide() {
    // Center the current slide
    if (index === currentSlide) return -slideWidth * (index - center);

    // The previous and next slide should be shown next to the current slide,
    // when the first slide is shown the last slide should be shown to the left of to it,
    if (currentSlide === 1 && index === slides) return (-slideWidth * center) + offset;
    // and when the last slide is shown the first slide should be shown to the right of it.
    if (currentSlide === slides && index === 1) return (slideWidth * center) - offset;

    // Slide to the left
    if (index < currentSlide) return -slideWidth * (index - center) - slideWidth + offset;
    // Slide to the right
    if (index > currentSlide) return -slideWidth * (index - center) + slideWidth - offset;

    return index - center > 0 ? slideWidth : -slideWidth;
  }

  function setOpacity() {
    if (currentSlide === slides && index === 1) return '1';
    if (currentSlide === 1 && index === slides) return '1';
    if (index > (currentSlide + 1) || index < (currentSlide - 1)) return '0';

    return '1';
  }

  function setPointerEvents() {
    if (currentSlide === slides && index === 1) return 'auto';
    if (currentSlide === 1 && index === slides) return 'auto';
    if (index > (currentSlide + 1) || index < (currentSlide - 1)) return 'none';

    return 'auto';
  }

  function handleSwipe(eventData) {
    if (eventData.dir.toLowerCase() === 'left') {
      setSlide(currentSlide === slides ? 1 : currentSlide + 1);
    } else if (eventData.dir.toLowerCase() === 'right') {
      setSlide(currentSlide === 1 ? slides : currentSlide - 1);
    }
  }

  const handlers = useSwipeable({
    onSwiped: (eventData) => handleSwipe(eventData),
    trackMouse: true,
  });

  useEffect(
    () => {
      // Update the width of the progress bar in the current slide and animate the width for each second
      const progressBar = document.querySelector(`#progress-${currentSlide}`);

      if (currentSlide === index && type === Types.Video) {
        const video = document.querySelector(`#video-${index}`);
        setDuration(Math.round(video.duration * 1000));
        video.currentTime = 0;
        video.play();
        progressBar.animate(
          [
            {
              width: `${0}%`,
            },
            {
              width: `${100}%`,

            },
          ],
          {
            duration: video.duration * 1000,
          },
        );
      } else if (currentSlide === index && type === Types.Image) {
        setDuration(parseInt(REACT_APP_DURATION, 10));
        progressBar.animate(
          [
            {
              width: `${0}%`,
            },
            {
              width: `${100}%`,

            },
          ],
          {
            duration,
          },
        );
      }
    },

    [currentSlide],
  );

  return (
    <button
      type="button"
      onClick={() => setSlide(index)}
      {...handlers}
      className={`slide w-slide-sm lg:w-slide-lg xl:w-slide-xl relative bg-neutral-700 duration-750 ease-out
       ${index === currentSlide ? 'z-10' : 'z-0'} rounded-2xl transition-all`}
      style={{
        transform: `translateX(${translateSlide()}px)`,
        opacity: setOpacity(),
        pointerEvents: setPointerEvents(),
      }}
    >
      <div
        className={`absolute z-10 top-0 left-0 w-full h-full transition-all 
      ${index === currentSlide ? 'bg-woodsmoke/25 pointer-events-none' : 'bg-woodsmoke/75'}`}
      />
      <div
        className={`w-full rounded-2xl text-white group relative cursor-pointer shadow-slide-drop
        ${type === Types.Image && 'p-6 lg:p-8 flex flex-col gap-y-2 justify-between'}  
        ${index === currentSlide ? 'h-[20rem] lg:h-[23rem] xl:h-[28rem]' : 'h-[18rem] lg:h-[20rem] xl:h-[23rem] z-0'} 
        `}
      >
        {type === Types.Image ? (
          <>
            <div
              className="absolute z-0 top-0 left-0 w-full h-full rounded-xl shadow-slide bg-cover"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="flex z-10 flex-col gap-y-6 xl:gap-y-12 max-w-[10rem]w lg:max-w-[14rem]">
              <span
                className="py-1 px-2 rounded group-hover:bg-blue-600 transition-colors font-medium
                tracking-widest w-fit text-xs bg-blue-700 uppercase select-none"
              >
                {label}
              </span>
              <p className="font-bold text-xl xl:text-3xl text-left select-none">{title}</p>
            </div>
            <a
              className="font-medium text-sm lg:text-base inline-flex items-center group-hover:gap-x-3
          transition-all gap-x-2 z-10 relative select-none"
              href="https://ui-design-2.netlify.app/#"
            >
              {cta}
              <ArrowRight size={20} />
            </a>
          </>
        ) : (
          <>
            <video
              id={`video-${index}`}
              className="w-full h-full object-cover rounded-xl"
              playsInline
              muted
              autoPlay
            >
              <source src={`${image}`} type="video/mp4" />
            </video>
            <span
              className="py-1 px-2 rounded group-hover:bg-blue-600 transition-colors font-medium
                tracking-widest w-fit text-xs bg-blue-700 uppercase select-none absolute
                top-6 lg:top-8 left-6 lg:left-8"
            >
              {label}
            </span>
            <div className="flex z-10 w-full h-full group-hover:opacity-100 opacity-0
            flex-col justify-center items-center absolute top-0 left-0 transition-all"
            >
              {isPlaying ? (
                <Play className="fill-white" size={60} onClick={() => setIsPlaying(false)} />
              ) : (
                <Pause className="fill-white" size={60} onClick={() => setIsPlaying(true)} />
              )}
            </div>
          </>
        )}
        <div className={`${index === currentSlide ? 'block' : 'hidden'} 
        absolute left-0 bottom-0 w-full h-1 md:h-2 bg-gray-500 rounded-b-2xl overflow-hidden`}
        >
          <div
            id={`progress-${index}`}
            className="bg-blue-500 h-full"
          />
        </div>
      </div>
    </button>
  );
}

export default Slide;
