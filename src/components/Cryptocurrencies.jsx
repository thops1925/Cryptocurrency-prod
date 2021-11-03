import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptoQuery } from '../services/cryptoApi';
function Cryptocurrencies() {
  const { data: cryptosList, isFetching } = useGetCryptoQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  console.log(cryptos);
  return (
    <>
      <Row gutters={[32, 32]} className="crypto-card-container">
        {cryptos.map((item) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={item.id}
          ></Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;
