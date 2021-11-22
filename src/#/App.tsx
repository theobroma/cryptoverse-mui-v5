// https://fettblog.eu/react-types-for-children-are-broken/
import React from 'react';
import MainView from '../@views/MainView';
import { GuestLayout } from './Layouts';

export const AppContainer = () => {
  return (
    <GuestLayout>
      <MainView />
    </GuestLayout>
  );
};
