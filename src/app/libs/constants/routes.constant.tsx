import { createBrowserRouter } from 'react-router-dom';
import App from '../../../App';
import React from 'react';

export const routesConstant = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);
