import React, { Component } from 'react';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          brand: 'yys',
          data: ['大天狗', '茨木童子', '彼岸花', '花鸟卷']
        },
        {
          brand: 'LOL',
          data: ['EZ', '洛', '女警', '凯南']
        }
      ]
    }
  }
  render () {
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <li key = { index }>
                { item.brand }
                <ul>
                  {
                    item.data.map((itm, idx) => {
                      return (
                        <li key = { idx }>
                          { itm }
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default App;