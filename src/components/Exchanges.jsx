import React from 'react'
import {useGetCryptoExchangesQuery} from '../services/cryptoApi'
import { Col, Row, Typography, Select, Collapse } from 'antd';
import millify from 'millify';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const {data, isFetching} = useGetCryptoExchangesQuery();
  const exchangesList = data?.data?.exhanges;

  if (isFetching) return 'Loading...';

  return (
    <>
      <Row>
        <Col span={6}>Exhanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangesList?.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={(
                  <Row key={exchange.id}>
                  </Row>
                )}>

              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>

    </>
  )
}

export default Exchanges