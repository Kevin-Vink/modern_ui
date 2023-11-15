import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Film, Image } from 'react-feather';
import { useSwipeable } from 'react-swipeable';
import useResizeObserver from '../hooks/useResizeObserver';

const Types = {
  Image: 'image',
  Video: 'video',
};

const { REACT_APP_DURATION } = process.env;

function Slide({
  label, title, cta, media, index, currentSlide, setSlide, center, slides, type, setDuration,
}) {
  const slideWidth = useResizeObserver();
  const [translateX, setTranslateX] = useState(0);
  const [videoDuration, setVideoDuration] = useState(null);

  const progressBarRef = useRef();

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

  useEffect(() => {
    // Wait for the slideWidth to be set
    if (slideWidth) setTranslateX(translateSlide());
  }, [index, currentSlide, slideWidth]);

  function setOpacity() {
    // Show the current slide and the previous and next slide
    if (currentSlide === slides && index === 1) return '1';
    if (currentSlide === 1 && index === slides) return '1';
    // Hide the rest of the slides
    if (index > (currentSlide + 1) || index < (currentSlide - 1)) return '0';

    return '1';
  }

  function setPointerEvents() {
    // Show the current slide and the previous and next slide
    if (currentSlide === slides && index === 1) return 'auto';
    if (currentSlide === 1 && index === slides) return 'auto';
    // Hide the rest of the slides
    if (index > (currentSlide + 1) || index < (currentSlide - 1)) return 'none';

    return 'auto';
  }

  function handleSwipe(eventData) {
    if (eventData.dir.toLowerCase() === 'left') {
      // If the current slide is the last slide, the next slide should be the first slide
      setSlide(currentSlide === slides ? 1 : currentSlide + 1);
    } else if (eventData.dir.toLowerCase() === 'right') {
      // If the current slide is the first slide, the previous slide should be the last slide
      setSlide(currentSlide === 1 ? slides : currentSlide - 1);
    }
    document.body.style.overflowY = 'auto';
  }

  function handleSwiping(eventData) {
    if (translateX !== translateSlide() || index !== currentSlide) {
      return;
    }

    document.body.style.overflowY = 'hidden';

    if (eventData.dir.toLowerCase() === 'left') {
      // If the current slide is the last slide, the next slide should be the first slide
      // We also need to add a little offset to the translateX value to make the slide be under the current slide
      // (10% of the slide width) and negative because it's a left slide so it needs to go back to the right
      setTranslateX(translateSlide() + ((slideWidth / 10) * -1));
    } else if (eventData.dir.toLowerCase() === 'right') {
      // If the current slide is the first slide, the previous slide should be the last slide
      // We also need to add a little offset to the translateX value to make the slide be under the current slide
      // (10% of the slide width)
      setTranslateX(translateSlide() + (slideWidth / 10));
    }
  }

  function handleTap() {
    if (index !== currentSlide) {
      setSlide(index);
    }
  }

  const handlers = useSwipeable({
    onSwiped: (eventData) => handleSwipe(eventData),
    onSwiping: (eventData) => handleSwiping(eventData),
    onTap: () => handleTap(),
    delta: 100,
    trackMouse: true,
  });

  function startProgressBar(duration) {
    setDuration(parseInt(duration, 10));

    progressBarRef.current.animate(
      [
        {
          width: `${0}%`,
        },
        {
          width: `${100}%`,
        },
      ],
      {
        duration: parseInt(duration, 10),
      },
    );
  }

  useEffect(() => {
    // Update the width of the progress bar in the current slide and animate the width for each second
    const video = document.querySelector(`#video-${index}`);

    if (currentSlide === index && type === Types.Video) {
      if (videoDuration !== null) {
        startProgressBar(videoDuration * 1000);
        video.play();

        setTimeout(() => {
          video.pause();
          video.currentTime = 0;
        }, (videoDuration * 1000) + 200);
      } else if (!media || media === '') {
        startProgressBar(REACT_APP_DURATION);
      }
    } else if (currentSlide === index && type === Types.Image) {
      startProgressBar(REACT_APP_DURATION);
    }

    if (video && currentSlide !== index) {
      video.pause();
      video.currentTime = 0;
    }
  }, [currentSlide, videoDuration]);

  return (
    <button
      type="button"
      {...handlers}
      className={`slide w-slide-sm lg:w-slide-lg xl:w-slide-xl relative bg-neutral-700
       ${index === currentSlide ? 'z-10' : 'z-0'} rounded-2xl duration-500 transition-transform`}
      style={{
        transform: `translateX(${translateX}px)`,
        opacity: setOpacity(),
        pointerEvents: setPointerEvents(),
      }}
    >
      <div
        className={`absolute z-10 top-0 left-0 w-full h-full transition-all 
      ${index === currentSlide ? 'bg-woodsmoke/25 pointer-events-none' : 'bg-woodsmoke/75'}`}
      />
      <div
        className={`w-full rounded-2xl text-white group relative cursor-pointer shadow-slide-drop overflow-hidden
        ${type === Types.Image && 'p-6 lg:p-8 flex flex-col gap-y-2 justify-between'}  
        ${index === currentSlide ? 'h-[20rem] lg:h-[23rem] xl:h-[28rem]' : 'h-[18rem] lg:h-[20rem] xl:h-[23rem] z-0'} 
        `}
      >
        {type === Types.Image ? (
          <>
            {media && media !== '' ? (
              <div
                className="absolute z-0 top-0 left-0 w-full h-full rounded-2xl shadow-slide bg-cover"
                style={{ backgroundImage: `url(${media})` }}
              />
            ) : (
              <div
                className="absolute z-0 top-0 left-0 w-full h-full rounded-2xl
                shadow-slide bg-cover flex items-center justify-center"
              >
                <Image className="stroke-neutral-500" size={60} />
              </div>
            )}
            <div className="flex flex-col gap-y-6 xl:gap-y-12 max-w-[10rem]w lg:max-w-[18rem]">
              <span className="absolute top-6 right-8 z-10 text-6xl font-thin shadow-inner text-neutral-300/50">
                {index}
              </span>
              <span
                className="py-1 px-2 rounded group-hover:bg-blue-600 transition-colors font-medium
                tracking-widest w-fit z-10 text-xs bg-blue-700 uppercase select-none"
              >
                {label}
              </span>
              <p className="font-bold z-10 text-xl xl:text-3xl text-left select-none">{title}</p>
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
          <div className="relative">
            {media && media !== '' ? (
              <>
                <video
                  id={`video-${index}`}
                  onLoadedMetadata={(e) => setVideoDuration(e.target.duration)}
                  className="w-full h-full object-cover rounded-2xl"
                  playsInline
                  muted
                >
                  <source src={`${media}`} type="video/mp4" />
                </video>
                <div className="absolute z-0 left-0 top-0 h-full w-full
              lg:bg-gradient-to-br from-woodsmoke/50 via-transparent to-transparent"
                />
              </>
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <Film className="stroke-neutral-500" size={60} />
              </div>
            )}
            <span className="absolute top-6 right-8 z-10 text-6xl font-thin shadow-inner text-neutral-300/50">
              {index}
            </span>
            <div className="absolute top-6 lg:top-8 left-6 lg:left-8
            max-w-[10rem]w lg:max-w-[18rem] flex flex-col gap-y-10"
            >
              <span
                className="py-1 px-2 rounded group-hover:bg-blue-600 transition-colors font-medium
                  tracking-widest w-fit z-10 text-xs bg-blue-700 uppercase select-none"
              >
                {label}
              </span>
              <p className="font-bold z-10 text-xl xl:text-3xl text-left select-none">{title}</p>
            </div>
            <a
              className="font-medium text-sm lg:text-base group-hover:gap-x-3 items-center select-none
          transition-all gap-x-2 z-10 absolute bottom-6 lg:bottom-8 left-6 lg:left-8 inline-flex"
              href="https://ui-design-2.netlify.app/#"
            >
              {cta}
              <ArrowRight size={20} />
            </a>
          </div>
        )}
        <div className={`${index === currentSlide ? 'block' : 'hidden'} 
        absolute left-0 bottom-0 w-full h-1.5 md:h-2.5 bg-neutral-600/25 blur-bg-md
        rounded-b-2xl overflow-hidden`}
        >
          <div
            ref={progressBarRef}
            className="bg-blue-500 h-full w-full"
          />
        </div>
      </div>
    </button>
  );
}

export default Slide;
