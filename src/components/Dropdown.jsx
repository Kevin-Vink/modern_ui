import React from 'react';

function Dropdown({ children }) {
  return (
    <div className={`absolute left-44 top-20 duration-500 z-10 opacity-0 transition-all pointer-events-none flex
                 max-w-max group-hover:opacity-100 group-hover:top-full group-hover:pointer-events-auto w-screen
                 px-4 -translate-x-1/2 before:w-5 before:h-5 before:absolute before:-top-1 before:left-32
                 before:bg-woodsmoke-400 before:rotate-45`}
    >
      <div className="w-screen max-w-md flex-auto overflow-hidden
                  rounded-3xl bg-woodsmoke-400 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
      >
        <div className="p-4 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
