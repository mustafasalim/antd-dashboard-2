import 'antd/dist/reset.css';

import { createGlobalStyle } from 'antd-style';

const GlobalStyle = createGlobalStyle`
  html, body{
    background: ${(p) => p.theme.colorBgLayout};
    color: ${(p) => p.theme.colorText};
    min-height: 100vh;
  }

  #root{
    height: 100%;
  }
`;

export default GlobalStyle;
