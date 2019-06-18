import React, { Component } from 'react';
import store from '@/store';
import Banner from './Banner';
class App extends Component {
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      store.dispatch({
        type: 'changeProlist',
        data: data
      })
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      store.dispatch({
        type: 'changeBannerlist',
        data
      })
    })
    })
  }
  render () {
    console.log(store.getState())
    return (
      <div>
        {/* {
          store.getState().bannerlist.map((item, index) => {
            return (<img key = { index } src = { 'http://www.daxunxun.com' + item} />)
          })
        } */}
        <Banner bannerlist = { store.getState().bannerlist} />
        {
          store.getState().prolist.map((item, index) => {
            return (<li key = { index }>{ item.title }</li>)
          })
        }
      </div>
    )
  }
}
export default App;