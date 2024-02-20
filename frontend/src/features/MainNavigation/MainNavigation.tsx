import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const MainNavigation: React.FC = () => {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    </>
  );
};

export default MainNavigation;
