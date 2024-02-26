import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import DecksPage from '../pages/DecksPage/DecksPage';
import MainNavigation from '../features/MainNavigation/MainNavigation';
import CardDetailsPage from '../pages/CardDetailPage/CardDetailPage';
import NotFound from '../pages/HomePage/HomePage';
import DeckNavigation from '../features/DeckNavigation.tsx/DeckNavigation';
import { RoutesEnum } from './enums';



const router = createBrowserRouter([
  {
    path:RoutesEnum.ROOT,
    element:<MainNavigation/>,
    errorElement:<NotFound/>,
    children:[
    {index: true, element:<HomePage/>},
    {
      path:RoutesEnum.DECK, element: <DeckNavigation/>,
      children:[
        {index:true , element: <DecksPage/>},
        {path:RoutesEnum.CARD, element: <CardDetailsPage/>}
      ]
    },
  ]},
])

const AppRoutes: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;
