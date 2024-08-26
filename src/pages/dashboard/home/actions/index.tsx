import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

const HomeActions = () => {
  return (
    <Flex gap={10}>
      <Button icon={<PlusOutlined />}>New Projects</Button>
      <Button type="primary" icon={<PlusOutlined />}>
        Add New
      </Button>
    </Flex>
  );
};

export default HomeActions;
