import { Flex, Typography } from 'antd';

import { useStyles } from './style';

interface Props {
  title: string;
  actions?: React.ReactNode;
}

const PageHeader = (props: Props) => {
  const { title, actions } = props;
  const { styles } = useStyles();

  return (
    <div>
      <Flex
        className={styles.pageHeaderWrapper}
        justify="space-between"
        align="center"
      >
        <Typography.Title level={3}>{title ?? '-'}</Typography.Title>
        <div>{actions}</div>
      </Flex>
    </div>
  );
};

export default PageHeader;
