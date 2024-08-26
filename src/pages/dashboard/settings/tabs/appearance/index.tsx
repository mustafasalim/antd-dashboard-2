import { Divider } from 'antd';

import SettingsSection from '@/components/dashboard/pages/settings/settings-section';

import AppearanceColor from './color';
import AppearanceTheme from './theme';

const Appearance = () => {
  return (
    <div>
      <SettingsSection
        id="appearance-theme"
        title="System Theme"
        description="This area contains system theme settings."
        content={<AppearanceTheme />}
      />
      <Divider />
      <SettingsSection
        id="system-color"
        title="System Color"
        description="This area contains system color settings."
        content={<AppearanceColor />}
      />
    </div>
  );
};

export default Appearance;
