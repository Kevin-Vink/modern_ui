import React, { cloneElement } from 'react';
import { AlertOctagon } from 'react-feather';

function MenuItem({ text = 'No name given', icon = <AlertOctagon />, isNew = false }) {
  return (
    <div className="flex gap-x-2 items-center rounded-md w-full h-full p-2
    bg-woodsmoke-400 lg:bg-woodsmoke-300 relative"
    >
      <div className="rounded-full w-fit h-fit bg-woodsmoke-200 p-2">
        {cloneElement(icon, { className: 'w-4 h-4 stroke-blue-500 fill-blue-600/30' })}
      </div>
      <p className="text-xs">{text}</p>
      {isNew && (
        <span className="hidden xs:block text-xs bg-blue-600
                text-white rounded-full px-1.5 py-0.5 absolute top-1/2 -translate-y-1/2 right-2"
        >
          New
        </span>
      )}
    </div>
  );
}

export default MenuItem;
