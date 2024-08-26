import { Layout } from 'antd';

import { useStyles } from './style';

interface Props {
  children: React.ReactNode;
}

const DashboardLayoutContent = (props: Props) => {
  const { children } = props;
  const { styles } = useStyles();
  return (
    <Layout>
      <Layout.Content className={styles.layoutContent}>
        <main className={styles.layoutContentMain}>{children}</main>
      </Layout.Content>
    </Layout>
  );
};

export default DashboardLayoutContent;
