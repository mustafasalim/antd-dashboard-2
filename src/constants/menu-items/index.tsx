import {
  AppstoreAddOutlined,
  ClockCircleOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons';

export const menuItems = [
  {
    key: '/dashboard',
    label: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    key: '/library',
    label: 'My Library',
    icon: <FolderOpenOutlined />,
    children: [
      {
        key: '/library/projects',
        label: 'Project',
      },
      {
        key: '/library/datasets',
        label: 'Dataset',
      },
      {
        key: '/library/models',
        label: 'Model',
      },
    ],
  },
  {
    key: '/history',
    label: 'History',
    icon: <ClockCircleOutlined />,
  },
  {
    key: '/apps',
    label: 'Apps',
    icon: <AppstoreAddOutlined />,
    children: [
      {
        key: '/apps/browser',
        label: 'Browser',
      },
      {
        key: '/apps/your-apps',
        label: 'Your Apps',
      },
    ],
  },
  {
    key: '/dashboard/settings',
    label: 'Settings',
    icon: <SettingOutlined />,
  },
];

export const generateMenuItems = () => {
  return menuItems;
};
