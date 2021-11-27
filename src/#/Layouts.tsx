import { Box } from '@mui/material';
import React from 'react';
import SearchAppBar from '../@components/AppBar';
import PersistentDrawerLeft from '../@components/AppBar/Drawer';
import Footer from '../@components/Footer';

interface ILayout {
  // All other props
  [x: string]: any;
}

export const GuestLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="HolyGrail">
      <PersistentDrawerLeft>{children}</PersistentDrawerLeft>
      {/* <SearchAppBar /> */}
      {/* <main className="HolyGrail-content">
        <Box mt={2} mb={2}>
          {children}
        </Box>
      </main> */}
      <Footer />
    </div>
  );
};
