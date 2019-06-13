import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: ['a', 's', 'd', 'f']
    }
    this.data = {
      list: [
        {
          brand: '球类',
          data: ['球', '球球', '球球球']
        },
        {
          brand: '饼类',
          data: ['铁饼', '面饼', '大饼']
        }
      ]
    }
  }

  render () {
    let arr = [];
    let ar = [];
  
    this.state.list.map((item, index) => {
      arr.push(<li key = { index }>{ item }</li>)
    })

    this.data.list.map((itm, idx) => {
      let a = [];
      itm.data.map((it, id) => {
        a.push(<li key = { id }>{ it }</li>)
      })
      ar.push(<li key = { idx }>
        { itm.brand }
        <ul>{ a }</ul>
      </li>)
    })
    return (
      // <ul>
      //   { this.state.list } ----------
      //   { arr }
      // </ul>


      <ul>
        { ar }
      </ul>
    )
  }
}

export default App;