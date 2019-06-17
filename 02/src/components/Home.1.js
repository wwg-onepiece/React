// 父组件给子组件传值
import React, { Component } from 'react';
import Prolist from './Prolist';
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: []
    }
  }
  render () {
    return (
      <div className="box">
        <header className="header">首页头部</header>
        <div className="content">
          <Prolist prolist = { this.state.prolist } />
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