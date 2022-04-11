import React from 'react'
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi"
import { Select, Typography, Row, Col, Avatar, Card} from 'antd'

const { Text, Title } = Typography;
const { Option } = Select;

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();
  return (
    <div>News</div>
  )
}

export default News