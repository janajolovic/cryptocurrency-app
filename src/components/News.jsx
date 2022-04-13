import React from 'react'
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi"
import { Select, Typography, Row, Col, Avatar, Card} from 'antd'
import moment from "moment"

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: "Cryptocurrency", count: simplified ? 6 : 12});
  if (!cryptoNews?.value) return "Loading..."

  return (
    <Row gutter={[24, 24]}> 
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target="_blank" rel="norefererer">
              <div className='news-image-container'>
                <Title level={4} className="news-title">{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage } alt="news" />
              </div>
              <p>
                {news.description.length > 100 ? news.description.substring(0,100) + "..." : news.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                  <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col> 
      ))}
    </Row>
  )
}

export default News