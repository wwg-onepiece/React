import React,{ Component } from 'react';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: false
    }
  }
  
  render () {
    return (
      <div>
        {
          this.state.flag ? <h1>我是奔波儿霸</h1> : <h1>我是霸波儿奔</h1>
        }
      </div>
    )
  }
}

export default App;