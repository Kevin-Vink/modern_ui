import React, { cloneElement } from 'react';
import { Link } from 'react-router-dom';
import { AlertOctagon } from 'react-feather';

function LargeMenuItem({
  text, description, icon = <AlertOctagon />, to, isNew, isPopular,
}) {
  return (
    <Link to={to} className="font-semibold text-white">
      <div className={`group/navitem relative flex gap-x-6 rounded-lg p-4
                    transition-colors hover:bg-woodsmoke-300 
                    ${isPopular ? 'border-blue-600/40 border' : ''}`}
      >
        <div className="flex flex-col items-center justify-start">
          <div className={`mt-1 flex h-11 w-11 items-center flex-none
                        justify-center ${isNew ? 'rounded-t-lg' : 'rounded-lg'} bg-woodsmoke/50`}
          >
            {cloneElement(icon, {
              strokeWidth: '1.5',
              className: 'h-6 w-6 fill-transparent stroke-neutral-500 group-hover/navitem:stroke-blue-500',
            })}
          </div>
          {isNew && (
          <span className="text-2xs text-center leading-none py-0.5 h-min w-full rounded-b-lg
        group-hover/navitem:bg-blue-600 transition-colors bg-neutral-500"
          >
            New
          </span>
          )}
        </div>
        <div className="w-full h-full flex flex-col gap-y-1">
          {text}
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default LargeMenuItem;
