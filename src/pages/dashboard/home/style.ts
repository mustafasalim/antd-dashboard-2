import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    backgroundColor: token.colorBgLayout,
    border: `${token.lineWidth}px dashed ${token.colorBorder}`,
    borderRadius: token.borderRadiusLG,
    padding: token.paddingLG,
    textAlign: 'center',
  },
  section: {
    backgroundColor: token.colorBgContainer,
    padding: `${token.sizeXXL}px 0px`,
  },
}));
