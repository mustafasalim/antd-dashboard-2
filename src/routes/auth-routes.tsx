import type { RouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const authRoutes: RouteObject = {
  path: "auth",
  element: <Outlet />,
  children: [
    // pages
  ],
};
