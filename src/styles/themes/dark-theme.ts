import type { AliasToken } from 'antd/es/theme/internal';

import { useStore } from '@/store';

import SharedTheme from './shared-theme';

const DarkTheme = () => {
  const color = useStore((state) => state.colorSlice.color);

  console.log(color);

  const theme: Partial<AliasToken> = {
    ...SharedTheme,
    colorBorder: 'rgba(253, 253, 253, 0.12)',
    colorPrimary: color,
  };

  return theme;
};

export default DarkTheme;
