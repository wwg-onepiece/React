import React,{ Component } from 'react';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          brand: 'yys',
<<<<<<< HEAD
          data: ['大天狗', '茨木童子', '彼岸花', '花鸟卷']
        },
        {
          brand: 'LOL',
          data: ['EZ', '劫', '女警', '凯南']
=======
          data: ['大天狗', '茨木童子', '彼岸花']
        },
        {
          brand: 'LOL',
          data: ['EZ', '凯南']
>>>>>>> eb5d7e1ffb703eb11deb307ce1d0ee1bf1312eb0
        }
      ]
    }
  }
  render () {
    let arr = [];
    this.state.list.map((item, index) => {
      let ar = [];
      item.data.map((itm, idx) => {
        ar.push(<li key = { idx }>{ itm }</li>)
      })
      let oli = <li key = { index }>{ item.brand }<ul>{ ar }</ul></li>;
      arr.push(oli)
    })
    return (
      <ul>
        { arr }
      </ul>
    )
  }
}

export default App;