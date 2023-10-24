import React from 'react';
import { Link } from 'react-router-dom';
import { AlertOctagon } from 'react-feather';

function ListItem({
  icon = <AlertOctagon size="20" />,
  title = 'Null',
  to = '',
  active = `/dashboard${to}` === window.location.pathname,
  collapsed = sessionStorage.getItem('collapsed'),
  showOnCollapsed = false,
  children,
}) {
  return (
    <Link
      to={`/dashboard${to}`}
      className={`flex items-center justify-between transition-all relative py-1 duration-300 ease-in-out group
      before:absolute before:-left-5 hover:before:-left-[1.125rem] before:w-1 before:h-full before:bg-blue-500 
      before:transition-all before:duration-300 before:rounded-r-md before:ease-in-out hover:before:bg-blue-500 
      focus:before:bg-blue-500 !outline-none focus:before:-left-[1.125rem]
      ${active && 'before:-left-[1.125rem] hover:before-left-[1.125rem] hover:before:bg-blue-500'}`}
    >
      <div className="flex gap-x-3">
        {React.cloneElement(icon, {
          className: `${active ? 'stroke-blue-500' : 'stroke-gray-500'} duration-300 delay-100 ease-in-out
          transition-transform group-hover:-rotate-6 group-hover:stroke-blue-500 group-focus:stroke-blue-500`,
        })}
        <h1 className={`${collapsed && 'absolute bg-woodsmoke-400 left-0 shadow-md rounded-md px-4 py-2 opacity-0 '
      + 'pointer-events-none group-hover:opacity-100 group-hover:left-14 duration-500 ease-in-out '
      + 'group-focus:opacity-100 group-focus:left-14'} font-medium text-white`}
        >
          {title}
        </h1>
      </div>
      { (!collapsed || showOnCollapsed) && children}
    </Link>
  );
}
export default ListItem;
