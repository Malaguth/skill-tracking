import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { CounterProvider } from '../../contexts/CounterContext/CounterContext';

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
