import React from 'react';
import { ArrowRight } from 'react-feather';

function Slide({
  label, title, cta, image, index, currentSlide, setSlide, slides,
}) {
  function translateSlide() {
    if (index === 1) return 'translate-x-20';
    if (index === slides) return '-translate-x-20';
    return '';
  }

  return (
    /* translate-x-20, -translate-x-20 */
    <button
      type="button"
      onClick={() => setSlide(index)}
      className={`w-slide relative transition-all bg-neutral-700 
      ${index === currentSlide ? 'z-10' : 'z-0'} ${translateSlide()}`}
    >
      <div className={`absolute z-10 top-0 left-0 w-full h-full transition-all 
      ${index === currentSlide ? 'bg-woodsmoke/15 pointer-events-none' : 'bg-woodsmoke/75'}`}
      />
      <div className={`w-full rounded-2xl z-0 text-white p-8  ${index === currentSlide ? 'h-[28rem]' : 'h-[23rem]'} 
      flex flex-col gap-y-2 justify-between group relative cursor-pointer shadow-slide-drop`}
      >
        <div
          className="absolute z-10 top-0 left-0 w-full h-full bg-cover rounded-xl shadow-slide"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="flex z-20 flex-col gap-y-12 max-w-[14rem]">
          <span
            className="py-1 px-2 rounded group-hover:bg-blue-600 transition-colors font-medium
                tracking-widest w-fit text-xs bg-blue-700 uppercase"
          >
            {label}
          </span>
          <p className="font-bold text-3xl text-left">{title}</p>
        </div>
        <a
          className="font-medium inline-flex items-center group-hover:gap-x-3 transition-all gap-x-2 z-10 relative"
          href="https://google.com"
        >
          {cta}
          <ArrowRight size={20} />
        </a>
      </div>
    </button>
  );
}

export default Slide;
