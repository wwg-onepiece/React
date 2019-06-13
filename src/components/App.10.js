// 解决this指向问题 --- 构造器
import React,{ Component } from 'react';
class App extends Component {
  constructor (props) {
    super(props);
    this.btnClickFun = this.btnClickFn.bind(this)
    console.log('1',this);
  }
  btnClickFn () {
    console.log('2',this); // undefined ----- this指向的问题
  }

  render () {
    return (
      <div>
        <button onClick = { this.btnClickFun }>react按钮</button>
      </div>
    )
  }
}

export default App;