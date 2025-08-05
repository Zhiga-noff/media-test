import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { routesConstant } from './app/libs/constants';
import { RouterProvider } from 'react-router-dom';
import { MainLayout } from "./layout/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <RouterProvider router={routesConstant}/>
      </MainLayout>
    </QueryClientProvider>
  </React.StrictMode>,
);
