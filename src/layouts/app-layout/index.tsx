import { Outlet } from "react-router-dom";

import AppProvider from "@/providers/app-provider";

const AppLayout = () => {
  return (
    <AppProvider>
      <Outlet />
    </AppProvider>
  );
};

export default AppLayout;
