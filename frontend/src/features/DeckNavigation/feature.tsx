import React from 'react';
import { Outlet } from 'react-router-dom';

const DeckNavigation: React.FC = () => {
  return (
    <>
    <Outlet/>
    </>
  );
};

export default DeckNavigation;
