import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CardPage from './pages/CardPage/CardPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/deck-of-cards" element={<CardPage />}/>
    </Routes>
  );
};

export default AppRoutes;
