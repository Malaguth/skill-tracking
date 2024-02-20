import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DecksPage from './pages/DecksPage/DecksPage';
import MainNavigation from './features/MainNavigation/MainNavigation';

export enum RoutesEnum {
  ROOT = "/",
  HOME = "",
  DECK = "deck-of-cards"
}

const router = createBrowserRouter([
  {
    path:RoutesEnum.ROOT, 
    element:<MainNavigation/>, 
    children:[
    {index: true, element:<HomePage/>},
    {path:RoutesEnum.DECK, element: <DecksPage/>}
  ]},
])

const AppRoutes: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;
