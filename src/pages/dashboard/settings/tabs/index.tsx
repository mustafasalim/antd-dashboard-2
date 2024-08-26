import { Tabs, type TabsProps } from 'antd';

import Appearance from './appearance';

const SettingsTabs = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Appearance',
      children: <Appearance />,
    },
  ];

  return (
    <div>
      <Tabs size="small" defaultActiveKey="1" items={items} />
    </div>
  );
};

export default SettingsTabs;
