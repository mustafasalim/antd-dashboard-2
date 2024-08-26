import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/layouts/app-layout';

import { authRoutes } from './auth-routes';
import { dashboardRoutes } from './dashboard-routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [dashboardRoutes, authRoutes],
  },
]);

export default router;
