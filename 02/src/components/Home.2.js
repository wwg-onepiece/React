// 子组件给父组件传值
import React, { Component } from 'react';
import Prolist from './Prolist';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: []
    }
  }
  getCountFn (data) {
    this.setState({
      count: data
    })
  }

  render () {
    return (
      <div className="box">
        <header className="header">首页头部</header>
        <div className="content">
          首页内容---{ this.state.count }
          <Prolist prolist = { this.state.prolist } getCountFn = { this.getCountFn.bind(this)} />
        </div>
      </div>
    )
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        prolist: data
      })
    })
  }
}

export default Com;