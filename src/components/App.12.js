// 事件中传参---不推荐使用
import React,{ Component } from 'react'
class App extends Component {
  constructor (props) {
    super(props);
    console.log('1', this)
  }
  btnClickFn (event, id) {
    console.log(id, this);
  }

  /** <button onClick = { function (e) {return this.btnClickFn(e) } }>react按钮</button>*/
  render () {
    const _this =this
    return (
      <div>
        <button onClick = { function (e) {return _this.btnClickFn(e, 11) } }>react按钮</button>
        <button onClick = { (e) => this.btnClickFn(e, 22) }>react按钮</button>
      </div>
    )
  }
}

export default App;