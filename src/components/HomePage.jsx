import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptoQuery } from '../services/cryptoApi';

const { Title } = Typography;

function HomePage() {
  const { data, isFetching } = useGetCryptoQuery();
  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12} className="">
          <Statistic title="Total Cryptocurrency" value="5" />
        </Col>
        <Col span={12} className="">
          <Statistic title="Total Exchanges" value="5" />
        </Col>
        <Col span={12} className="">
          <Statistic title="Total Market Cap" value="5" />
        </Col>
        <Col span={12} className="">
          <Statistic title="Total 24 hours Volume" value="5" />
        </Col>
        <Col span={12} className="">
          <Statistic title="Total Markets" value="5" />
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
