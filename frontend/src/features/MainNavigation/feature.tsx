import React from 'react';
import { Outlet } from 'react-router-dom';
import { CounterProvider } from '../../contexts/CounterContext/context';
import Header from '../Header/feature';

const MainNavigation: React.FC = () => {
  return (
    <>
    <CounterProvider>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </CounterProvider>
    </>
  );
};

export default MainNavigation;
