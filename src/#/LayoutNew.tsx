import React from 'react';
import { Outlet } from 'react-router-dom';
import PersistentDrawerLeft from '../@components/AppBar/Drawer';
import Footer from '../@components/Footer';

const LayoutNew = () => {
  return (
    <>
      <PersistentDrawerLeft>
        <Outlet />
      </PersistentDrawerLeft>
      <Footer />
    </>
  );
};

export { LayoutNew };
