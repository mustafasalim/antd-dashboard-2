import { Typography } from 'antd';

import PageHeader from '@/components/dashboard/pages/common/page-header';

import HomeActions from './actions';
import { useStyles } from './style';

const { Text } = Typography;
const Home = () => {
  const { styles } = useStyles();
  return (
    <div>
      <PageHeader title="Dashboard" actions={<HomeActions />} />
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.placeholder}>
            <Text>Content</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
