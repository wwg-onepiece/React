// 给组件添加样式 区别： class变为className
import React,{ Component } from 'react';
import '@/main.scss';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      console.log(data)
      this.setState ({
        list: data
      })
    })
  }
  render () {
    return (
      <ul className='list'>
        {
          this.state.list.map(item => {
            return (<li key = { item.id } style={
              {
                width: '100%',
                height: '30px',
                lineheight: '30px',
                borderBottom: '1px solid #ccc'
                // 驼峰式命名
              }
            }>{ item.title }</li>)
          })
        }
      </ul>
    )
  }
}

export default App;
