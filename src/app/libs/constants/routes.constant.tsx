import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { MainLayout } from '../../../layout/MainLayout';

const HomePage = React.lazy(() => import('../../ui/home-page/HomePage'));
const NewsPage = React.lazy(() => import('../../ui/news-page/NewsPage'));
const NotFound = React.lazy(() => import('../../ui/not-found/NotFound'));


export const routesConstant = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><HomePage /></MainLayout>,
  },
  {
    path: '/:newsId',
    element: <MainLayout><NewsPage /></MainLayout>,
  },
  { path: 'not-found', element: <MainLayout><NotFound /></MainLayout> },
  { path: '*', element: <MainLayout><NotFound /></MainLayout> },
]);
