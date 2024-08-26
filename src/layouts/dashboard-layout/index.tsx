import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import DashboardLayoutContent from './content';
import DashboardLayoutSidebar from './sidebar';
import { useStyles } from './style';

const DashboardLayout = () => {
  const { styles } = useStyles();
  return (
    <Layout className={styles.layout}>
      <DashboardLayoutSidebar />
      <DashboardLayoutContent>
        <Outlet />
      </DashboardLayoutContent>
    </Layout>
  );
};

export default DashboardLayout;
