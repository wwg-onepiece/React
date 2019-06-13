// 解决this指向问题---render内部绑定this
import React,{ Component } from 'react';
class App extends Component {
  constructor (props) {
    super(props);
    console.log('1', this);
  }
  btnClickFn () {
    console.log('2', this)
  }
  render () {
    return (
      <div>
        <button onClick = { this.btnClickFn.bind(this) }>react按钮</button>
      </div>
    )
  }
}

export default App;