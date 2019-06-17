import React from 'react';
import Prolist from '@/components/common/Prolist';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: []
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        prolist: data
      })
    })
  }
  render () {
    return (
      <div className = "box">
        <header className = "header">首页头部</header>
        <div className = "content">
          首页内容
          <Prolist prolist = { this.state.prolist }/>
        </div>
      </div>
    )
  }
}

export default Com;