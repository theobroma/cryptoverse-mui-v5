// https://stackoverflow.com/questions/69928061/struggling-with-typescript-react-eslint-and-simple-arrow-functions-components
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CryptoDetailsView from '../@views/CryptoDetailsView';
import ExchangesView from '../@views/ExchangesView';
import MainView from '../@views/MainView';

import { AppLayout } from './AppLayout';

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="cryptocurrencies" element={<MainView />} />
          <Route path="cryptocurrencies/:id" element={<CryptoDetailsView />} />
          <Route path="exchanges" element={<ExchangesView />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
