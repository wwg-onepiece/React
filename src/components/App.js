<<<<<<< HEAD
// 事件中传参---不推荐使用
import React,{ Component } from 'react'
=======
// 事件中传参，推荐使用
import React,{ Component } from 'react';
>>>>>>> eb5d7e1ffb703eb11deb307ce1d0ee1bf1312eb0
class App extends Component {
  constructor (props) {
    super(props);
    console.log('1', this)
<<<<<<< HEAD
=======
  }
  btnClickFn (id) {
    console.log(id, this);
>>>>>>> eb5d7e1ffb703eb11deb307ce1d0ee1bf1312eb0
  }
  btnClickFn (event, id) {
    console.log(id, this);
  }

  /** <button onClick = { function (e) {return this.btnClickFn(e) } }>react按钮</button>*/
  render () {
<<<<<<< HEAD
    const _this =this
    return (
      <div>
        <button onClick = { function (e) {return _this.btnClickFn(e, 11) } }>react按钮</button>
        <button onClick = { (e) => this.btnClickFn(e, 22) }>react按钮</button>
=======
    return (
      <div>
        <button onClick = { this.btnClickFn.bind(this, 22) }>react按钮</button>
>>>>>>> eb5d7e1ffb703eb11deb307ce1d0ee1bf1312eb0
      </div>
    )
  }
}

export default App;