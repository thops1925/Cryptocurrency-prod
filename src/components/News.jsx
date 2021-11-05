import React, { useState } from 'react';
import { Select, Card, Typography, Row, Col, Avatar } from 'antd';
import moment from 'moment';

import { useGetNewsQuery } from '../services/cryptoNewApi';
import { useGetCryptoQuery } from '../services/cryptoApi';

const demo = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: news } = useGetNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptoQuery(100);

  const cryptoNews = news?.value;

  if (!cryptoNews) return 'loading..';
  console.log(cryptoNews);

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => (
              <Option value={currency.name}>{currency.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.map((item, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={item.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {item.name}
                </Title>
                <img
                  src={item?.image?.thumbnail?.contentUrl || demo}
                  alt={item.name}
                />
              </div>
              <p>
                {item.description.length > 100
                  ? `${item.description.substring(0, 100)}...`
                  : item.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={item.provider[0]?.image?.thumbnail?.contentUrl || demo}
                  />
                  <Text className="provider-name">
                    {item.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(item.datePublished).startOf('ss').fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
