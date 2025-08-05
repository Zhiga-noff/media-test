import { createBrowserRouter } from 'react-router-dom';

import React from 'react';
import HomePage from "../../ui/home-page/HomePage";
import NewsPage from "../../ui/news-page/NewsPage";
import NotFound from "../../ui/not-found/NotFound";

export const routesConstant = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/:newsId',
    element: <NewsPage/>,
  },
  { path: 'not-found', element: <NotFound/> },
  { path: '*', element: <NotFound/> }
]);
