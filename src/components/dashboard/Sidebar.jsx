import React from 'react';
import {
  Aperture,
  ChevronLeft,
  Edit3,
  File,
  Inbox,
  Layout,
  Monitor,
  PieChart,
  Plus,
  Settings,
  Shield,
  ShoppingCart,
  Truck,
  Users,
} from 'react-feather';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

function Sidebar({ collapsed, handleCollapse }) {
  return (
    <div className="w-full h-full text-white border-r border-default flex flex-col justify-between p-4">
      <div className="flex flex-col gap-10">
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
        <div className="flex flex-col gap-4">
          <ListItem title="Overview" icon={<PieChart />} collapsed={collapsed}>
            <span className="w-6 h-6 flex justify-center items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </span>
          </ListItem>
          <ListItem title="Products" to="/products" icon={<ShoppingCart />} collapsed={collapsed}>
            <Link
              to="/dashboard/products/new"
              className="w-6 h-6 rounded-md hover:bg-woodsmoke-300/75 bg-woodsmoke-300 flex items-center
            justify-center p-1"
            >
              <Plus />
            </Link>
          </ListItem>
          <ListItem title="Orders" to="/orders" icon={<Truck />} collapsed={collapsed}>
            <span className="w-6 h-6 text-sm rounded-md bg-red-500 flex justify-center items-center">
              5
            </span>
          </ListItem>
          <ListItem title="Customers" to="/customers" icon={<Users />} collapsed={collapsed} />
          <ListItem title="Inbox" to="/inbox" icon={<Inbox />} collapsed={collapsed}>
            <div className="flex gap-2">
              <Link
                to="/dashboard/products/new"
                className="w-6 h-6 rounded-md hover:bg-woodsmoke-300/75 bg-woodsmoke-300 flex items-center
            justify-center p-1"
              >
                <Plus />
              </Link>
              <span className="w-6 h-6 text-sm rounded-md bg-red-500 flex justify-center items-center">
                55
              </span>
            </div>
          </ListItem>
          {!collapsed && <h3 className="text-gray-300">Content Management</h3>}
          <hr className="border-default" />
          <ListItem title="Sliders" to="/sliders" icon={<Layout />} collapsed={collapsed} />
          <ListItem title="Pages" to="/pages" icon={<Monitor />} collapsed={collapsed} />
          <ListItem title="Posts" to="/posts" icon={<Edit3 />} collapsed={collapsed} />
          <ListItem title="Files" to="/files" icon={<File />} collapsed={collapsed} />
          {!collapsed && <h3 className="text-gray-300">Settings</h3>}
          <hr className="border-default" />
          <ListItem title="Security" to="/security" icon={<Shield />} collapsed={collapsed} />
          <ListItem title="Settings" to="/settings" icon={<Settings />} collapsed={collapsed}>
            <span
              className="w-6 h-6 rounded-full bg-yellow-400/25 flex items-center
            justify-center p-1 text-yellow-400"
            >
              !
            </span>
          </ListItem>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
