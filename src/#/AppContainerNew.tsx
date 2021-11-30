import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainView from '../@views/MainView';
import { LayoutNew } from './LayoutNew';

export const AppContainerNew = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutNew />}>
          <Route index element={<div>Home</div>} />
          <Route path="cryptocurrencies" element={<MainView />} />
          <Route
            path="cryptocurrencies/:id"
            element={<div>cryptocurrencies/:id</div>}
          />
          <Route path="exchanges" element={<div>exchanges</div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
