import React,{ Component } from 'react';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flag: false
    }
  }
  render () {
    if (this.state.flag) {
      return (
        <h1>假作真时真亦假</h1>
      )
    } else {
      return (
        <h1>无为有处有还无</h1>
      )
    }
  }
}
export default App;