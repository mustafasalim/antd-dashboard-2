import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { generateMenuItems } from '@/constants/menu-items';

import { useStyles } from './style';

const SidebarMenu = () => {
  const { styles } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelect = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Menu
      theme="light"
      mode="inline"
      className={styles.menu}
      selectedKeys={[location.pathname]}
      defaultSelectedKeys={[location.pathname]}
      items={generateMenuItems()}
      onSelect={handleSelect}
    />
  );
};

export default SidebarMenu;
