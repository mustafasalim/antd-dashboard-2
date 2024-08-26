import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Flex, Select } from 'antd';

import { useStore } from '@/store';

const AppearanceTheme = () => {
  const {
    commonSlice: { darkMode, toggleDarkMode },
  } = useStore();

  const options = [
    {
      value: 'dark',
      label: (
        <Flex gap={5} justify="center" align="center">
          <MoonOutlined />
          <span>Dark</span>
        </Flex>
      ),
      disabled: darkMode,
    },
    {
      value: 'light',
      label: (
        <Flex gap={5} justify="center" align="center">
          <SunOutlined />
          <span>Light</span>
        </Flex>
      ),
      disabled: !darkMode,
    },
  ];

  const handleSelect = () => {
    toggleDarkMode();
  };

  return (
    <Select
      defaultValue={darkMode ? 'dark' : 'light'}
      options={options}
      onSelect={handleSelect}
    />
  );
};

export default AppearanceTheme;
