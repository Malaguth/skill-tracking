import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainNavigation from '../features/MainNavigation/feature';
import NotFound from '../pages/NotFound/NotFound';
import HomePage from '../pages/HomePage/page';
import DeckNavigation from '../features/DeckNavigation/feature';
import DecksPage from '../pages/DecksPage/page';
import CardDetailsPage from '../pages/CardDetailPage/page';
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
