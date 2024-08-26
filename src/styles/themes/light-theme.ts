import type { AliasToken } from 'antd/es/theme/internal';

import { useStore } from '@/store';

import SharedTheme from './shared-theme';

const LightTheme = () => {
  const color = useStore((state) => state.colorSlice.color);

  console.log(color);

  const theme: Partial<AliasToken> = {
    ...SharedTheme,
    colorBorder: 'rgba(5, 5, 5, 0.06)',
    colorPrimary: color,
  };

  return theme;
};

export default LightTheme;
