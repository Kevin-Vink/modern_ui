import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/dashboard/Sidebar';

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(sessionStorage.getItem('collapsed') === 'true');

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
    sessionStorage.setItem('collapsed', !collapsed);
  };

  useEffect(() => {
    if (sessionStorage.getItem('collapsed') === null) {
      sessionStorage.setItem('collapsed', false);
    }
  }, []);

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
