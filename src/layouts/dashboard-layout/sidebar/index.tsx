import { Flex, Image, Layout, theme } from 'antd';

import logoDark from '@/assets/logo-dark.svg';
import logoLight from '@/assets/logo-light.svg';
import { useStore } from '@/store';

import SidebarMenu from './menu';
import { useStyles } from './style';
import UserContextMenu from './user-context-menu';

const DashboardLayoutSidebar = () => {
  const {
    commonSlice: { darkMode },
  } = useStore();
  const {
    token: { colorBgBase },
  } = theme.useToken();
  const { styles } = useStyles();
  return (
    <Layout.Sider
      width={250}
      style={{ background: colorBgBase }}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <Flex className={styles.sidebarWrapper} vertical justify="space-between">
        <Flex vertical>
          <Flex>
            <Image
              width={160}
              preview={false}
              className={styles.logo}
              src={darkMode ? logoDark : logoLight}
            />
          </Flex>
          <SidebarMenu />
        </Flex>
        <Flex vertical justify="space-between">
          <UserContextMenu />
        </Flex>
      </Flex>
    </Layout.Sider>
  );
};

export default DashboardLayoutSidebar;
