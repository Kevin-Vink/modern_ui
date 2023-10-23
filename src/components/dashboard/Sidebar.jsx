import React from 'react';
import { Aperture, ChevronLeft } from 'react-feather';
import { Link } from 'react-router-dom';

function Sidebar({ collapsed, handleCollapse }) {
  console.log('Sidebar', collapsed);
  return (
    <div className="w-full h-full text-white border-r border-default flex flex-col justify-between p-4">
      <div className="relative flex items-center">
        <Link
          to="/dashboard"
          className="flex z-30 flex-row items-center gap-x-2 group"
        >
          <Aperture
            className="stroke-blue-500 group-hover:rotate-180
          duration-700 ease-in-out transition-transform"
            strokeWidth={1}
            size={30}
          />
          {!collapsed && (
            <h1 className="font-medium text-xl text-white">UIfy</h1>
          )}
        </Link>
        <button
          type="button"
          onClick={handleCollapse}
          className={`${collapsed ? 'rotate-180 -right-11' : '-right-4'} rounded-l-md hover:bg-default/75
          transition-all duration-300 ease-in-out transform absolute bg-default px-1 py-2`}
        >
          <ChevronLeft size={20} />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
