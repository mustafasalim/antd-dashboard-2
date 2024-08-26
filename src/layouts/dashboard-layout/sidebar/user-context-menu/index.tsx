import { LogoutOutlined, RightOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Flex } from 'antd';

import { useStyles } from './style';

const UserContextMenu = () => {
  const { styles } = useStyles();
  const items: MenuProps['items'] = [
    {
      key: '4',
      danger: true,
      icon: <LogoutOutlined />,
      label: 'Logout',
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Flex align="center">
        <Button
          icon={<RightOutlined />}
          type="text"
          iconPosition="end"
          className={styles.contextMenuButton}
        >
          <Flex align="center" justify="center" gap={5}>
            <Avatar
              size={24}
              src="https://api.dicebear.com/9.x/avataaars/svg?seed=2"
            />
            <span className={styles.contextMenuText}>User Name</span>
          </Flex>
        </Button>
      </Flex>
    </Dropdown>
  );
};

export default UserContextMenu;
