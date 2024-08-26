import PageHeader from '@/components/dashboard/pages/common/page-header';

import SettingsTabs from './tabs';

const Settings = () => {
  return (
    <div>
      <PageHeader title="Settings" />
      <SettingsTabs />
    </div>
  );
};

export default Settings;
