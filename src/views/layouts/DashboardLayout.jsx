import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/dashboard/Sidebar';

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${collapsed ? 'grid-cols-sidebar-collapsed' : 'grid-cols-sidebar'} 
    grid min-h-screen transition-[grid-template-columns] duration-300 ease-in-out`}
    >
      <Sidebar collapsed={collapsed} handleCollapse={handleCollapsed} />
      <div className="text-white py-6 px-10">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
