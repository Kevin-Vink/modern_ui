import React from 'react';
import { ArrowRight } from 'react-feather';
import { useSwipeable } from 'react-swipeable';

function Slide({
  label, title, cta, image, index, currentSlide, setSlide, center, slides,
}) {
  const slideWidth = document.getElementsByClassName('slide')[0]?.clientWidth;
  const offset = 40;

  function translateSlide() {
    // Center the current slide
    if (index === currentSlide) return -slideWidth * (index - center);

    // The previous and next slide should be shown next to the current slide,
    // when the first slide is shown the last slide should be shown to the left of to it,
    if (currentSlide === 1 && index === slides) return (-slideWidth * 3) + offset;
    // and when the last slide is shown the first slide should be shown to the right of it.
    if (currentSlide === slides && index === 1) return (slideWidth * 3) - offset;

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
      setSlide(currentSlide === 1 ? slides : currentSlide - 1);
    } else if (eventData.dir.toLowerCase() === 'right') {
      setSlide(currentSlide === slides ? 1 : currentSlide + 1);
    }
  }

  const handlers = useSwipeable({
    onSwiped: (eventData) => handleSwipe(eventData),
  });

  return (
    <button
      type="button"
      onClick={() => setSlide(index)}
      {...handlers}
      className={`slide w-slide-sm lg:w-slide-lg xl:w-slide-xl relative bg-neutral-700 duration-1000 ease-out
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
        className={`w-full rounded-2xl text-white p-8 ${index === currentSlide
          ? 'h-[20rem] lg:h-[23rem] xl:h-[28rem]' : 'h-[18rem] lg:h-[20rem] xl:h-[23rem] z-0'} 
      flex flex-col gap-y-2 justify-between group relative cursor-pointer shadow-slide-drop`}
      >
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
          className="font-medium inline-flex items-center group-hover:gap-x-3
          transition-all gap-x-2 z-10 relative select-none"
          href="https://ui-design-2.netlify.app/#"
        >
          {cta}
          <ArrowRight size={20} />
        </a>
      </div>
    </button>
  );
}

export default Slide;
