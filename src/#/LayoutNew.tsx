import React from 'react';
import { Outlet } from 'react-router-dom';
import PersistentDrawerLeft from '../@components/AppBar/Drawer';
import Footer from '../@components/Footer';

const LayoutNew = () => {
  return (
    <div className="HolyGrail">
      <PersistentDrawerLeft>
        <Outlet />
      </PersistentDrawerLeft>
      <Footer />
    </div>
  );
};

export { LayoutNew };
