import React, { Component } from 'react';
import Banner from '@/components/Banner';
import ProList from '@/components/ProList';

class Com extends Component {
  componentDidMount () {
    this.props.getHomeBannerListData();
    this.props.getHomeProListData();
  }
  
  render () {
    return (
      <div className = "box">
        <header className = "header">首页头部</header>
        <div className = "content">
          <Banner bannerlist = { this.props.homeBannerList } />
          <ProList prolist = { this.props.homeProList } />
        </div>
      </div>
    )
  }
}

export default Com;