import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { routesConstant } from './app/libs/constants';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={routesConstant} />
  </React.StrictMode>,
);
