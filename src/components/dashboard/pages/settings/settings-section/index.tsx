import { Col, Flex, Row, Typography } from 'antd';
import React from 'react';

interface Props {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

const SettingsSection = (props: Props) => {
  const { id, title, description, content } = props;
  return (
    <Row id={id ?? '-'} style={{ paddingTop: '10px' }}>
      <Col span={15} push={9}>
        {content ?? '-'}
      </Col>
      <Col span={9} pull={15}>
        <Flex vertical>
          <Typography.Title level={5}>{title ?? '-'}</Typography.Title>
          <Typography.Text type="secondary">
            {description ?? '-'}
          </Typography.Text>
        </Flex>
      </Col>
    </Row>
  );
};

export default SettingsSection;
