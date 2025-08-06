import { createBrowserRouter } from 'react-router-dom';

import React from 'react';
import HomePage from "../../ui/home-page/HomePage";
import NewsPage from "../../ui/news-page/NewsPage";
import NotFound from "../../ui/not-found/NotFound";
import { MainLayout } from "../../../layout/MainLayout";

export const routesConstant = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><HomePage/></MainLayout>,
  },
  {
    path: '/:newsId',
    element: <MainLayout><NewsPage/></MainLayout>,
  },
  { path: 'not-found', element: <MainLayout><NotFound/></MainLayout> },
  { path: '*', element: <MainLayout><NotFound/></MainLayout> }
]);
