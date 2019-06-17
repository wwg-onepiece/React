import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

const Com = ({ bannerlist }) => (
  <Carousel
    autoplay={true}
    autoplayInterval='3000'
    infinite
    dots='true'
    style={{ display: 'inline-block',width: '100%', height: 176 }}
  >
    {bannerlist.map((val, index) => (
      <a
        key={index}
        href="http://www.alipay.com"
        style={{ display: 'inline-block', width: '100%' }}
      >
        <img
          src={'http://www.daxunxun.com' + val}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
        />
      </a>
    ))}
  </Carousel>
)

export default Com;