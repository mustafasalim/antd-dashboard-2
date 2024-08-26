import type React from 'react';

import AntdProvider from '../antd-provider';

interface Props {
  children: React.ReactNode;
}

const AppProvider = (props: Props) => {
  const { children } = props;
  return <AntdProvider>{children}</AntdProvider>;
};

export default AppProvider;
