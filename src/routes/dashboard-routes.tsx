import type { RouteObject } from 'react-router-dom';

import DashboardLayout from '@/layouts/dashboard-layout';
import Home from '@/pages/dashboard/home';
import Settings from '@/pages/dashboard/settings';

export const dashboardRoutes: RouteObject = {
  path: 'dashboard',
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: 'settings',
      element: <Settings />,
    },
  ],
};
