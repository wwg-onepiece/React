// 编程式跳转
import React from 'react';
import Prolist from '@/components/common/Prolist';
import Banner from '@/components/common/Banner'
class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: [],
      bannerlist: [1,2],
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      this.setState({
        bannerlist: data
      })
    })
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        prolist: data
      })
    })
  }
  render () {
    console.log(this.props)
    return (
      <div className = "container">
        <div className = "box">
          <header className = "header">首页头部</header>
          <div className = "content">
            <Banner bannerlist = { this.state.bannerlist }/>
            <Prolist prolist = { this.state.prolist } { ...this.props }/>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;