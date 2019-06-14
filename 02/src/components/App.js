// 移动端布局  父子组件
import React, { Component } from 'react';
import Home from './Home';
import '@/main';
class Com extends Component {
  render () {
    return (
      <div className="container">
        <Home />
        <footer className="footer">底部</footer>
      </div>
    )
  }
}

export default Com;