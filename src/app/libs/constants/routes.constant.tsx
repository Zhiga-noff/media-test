import { createBrowserRouter } from 'react-router-dom';

import React from 'react';
import HomePage from "../../ui/home-page/HomePage";

export const routesConstant = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
]);
