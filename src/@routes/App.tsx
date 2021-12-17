// https://fettblog.eu/react-types-for-children-are-broken/
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainView from '../@views/MainView';
import { GuestLayout } from './Layouts';

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestLayout>Home</GuestLayout>} />
        <Route
          path="exchanges"
          element={<GuestLayout>Exchanges</GuestLayout>}
        />
        <Route
          path="cryptocurrencies"
          element={
            <GuestLayout>
              <MainView />
            </GuestLayout>
          }
        />
      </Routes>
      {/* <GuestLayout>
        <MainView />
      </GuestLayout> */}
    </BrowserRouter>
  );
};
