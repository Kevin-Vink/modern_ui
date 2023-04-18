import React from 'react';

function Dropdown({ children }) {
  return (
    <div className="absolute left-44 top-full z-10 invisible
                group-hover:visible flex w-screen max-w-max -translate-x-1/2 px-4 before:w-5 before:h-5
              before:absolute before:-top-1 before:left-32 before:bg-woodsmoke-400 before:rotate-45"
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
