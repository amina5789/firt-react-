import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATHS } from './routesPaths';
import {Layout} from './Loyout';
import { BLOG } from './Routes/BLOG';
import { FEATURES } from './Routes/FEATURES';
import { Home } from './Routes/Home';
import { ProuducCard } from './ProductCard/ProductCard';
import { Profile } from './Routes/Profile';
import { PAGES } from './Routes/PAGES';
import { LOOKBOOK } from './Routes/LOOKBOOK';
import { Shop } from './Routes/Shop';

export const routes = createBrowserRouter([
  {
    path: ROUTER_PATHS.Home, 
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATHS.Shop,
        element: <Shop />,
      },
      {
        path: ROUTER_PATHS.Lookbook,
        element: <LOOKBOOK />,
      },
      {
        path: ROUTER_PATHS.Features,
        element: <FEATURES />,
      },
      {
        path: ROUTER_PATHS.Pages,
        element: <PAGES />,
      },
      {
        path: ROUTER_PATHS.Blog,
        element: <BLOG />,
      },
      {
        path: ROUTER_PATHS.Profile,
        element: <Profile />,
      },
      {
        path: ROUTER_PATHS.ProductCard,
        element: <ProuducCard />,
      },
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
