import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { routesConstant } from './app/libs/constants';
import { RouterProvider } from 'react-router-dom';
import { MainLayout } from "./layout/MainLayout";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MainLayout>
      <RouterProvider router={routesConstant}/>
    </MainLayout>
  </React.StrictMode>,
);
