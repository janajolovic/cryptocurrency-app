import { Card, Col, Row } from 'antd';
import millify from 'millify';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = () => {
  const {data: cryptoList, isFetching} = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  return (
    <div>
      <Row gutter={[32, 32]} className="crypto-class-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card 
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} />}
                hoverable>
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cryptocurrencies