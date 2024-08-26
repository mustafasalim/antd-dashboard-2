import { App, ConfigProvider } from 'antd';
import { ThemeProvider } from 'antd-style';

import { useStore } from '@/store';
import { GlobalStyleConfig } from '@/styles/global-config';
import GlobalStyle from '@/styles/global-style';
import DarkTheme from '@/styles/themes/dark-theme';
import LightTheme from '@/styles/themes/light-theme';

interface Props {
  children: React.ReactNode;
}

const AntdProvider = (props: Props) => {
  const { children } = props;
  const darkMode = useStore((state) => state.commonSlice.darkMode);

  const token = darkMode ? DarkTheme() : LightTheme();
  const appearance = darkMode ? 'dark' : 'light';

  return (
    <ConfigProvider {...GlobalStyleConfig}>
      <ThemeProvider theme={{ token }} appearance={appearance}>
        <GlobalStyle />
        <App>{children}</App>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default AntdProvider;
