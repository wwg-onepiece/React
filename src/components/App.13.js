// 事件中传参---推荐使用
import React,{ Component } from 'react';
class App extends Component {
  constructor (props) {
    super(props);
    console.log('1', this);
  }
  btnClickFn (id) {
    console.log(id, this)
  }
  render () {
    return (
      <div>
        <button onClick = { this.btnClickFn.bind(this, '22') }>react按钮</button>
      </div>
    )
  }
}

export default App;