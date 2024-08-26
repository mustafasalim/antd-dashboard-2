import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  layoutContent: css`
    margin: '24px 16px 0';
  `,
  layoutContentMain: css`
    height: 100%;
    padding: 24px;
    background: ${token.colorBgContainer};
    border-left: 1px solid ${token.colorBorder};
    overflow-y: auto;
  `,
}));
