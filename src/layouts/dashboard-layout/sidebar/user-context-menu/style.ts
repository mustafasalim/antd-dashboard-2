import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => ({
  contextMenuButton: css`
    width: 100%;
    height: 40px;
    justify-content: space-between;
  `,
  contextMenuText: css`
    font-weight: 600;
  `,
}));
