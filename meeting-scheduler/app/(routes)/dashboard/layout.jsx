import React from 'react';
import SideNav from './_components/SideNav';
import DashboardHeader from './_components/DashboardHeader';

function DashboardLayout({children}) {
  return (
    <div>
      <div className="hidden md:block md:w-64 bg-slate-50 h-screen fixed">
        <SideNav/>
      </div>
      <div className=''>
        <DashboardHeader/>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;