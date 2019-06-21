import React from 'react';
import api from '@/api';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  goBack(){
    this.props.history.go(-1)
  }
  componentDidMount () {
    console.log()
    const { id } = this.props.match.params;
    api.reqGetData('/detail?id='+ id).then(data => {
      console.log(data)
      this.setState ({
        title: data[0].title
      })
    }) 
  }
  render () {
   
    return ( 
      <div className = "container">
        <div className = "box">
          <header className = "header">
            <button onClick = { this.goBack.bind(this) }>返回</button>
          </header>
          <div className = "content">
            { this.state.title }
          </div>
        </div>
        <footer className = "footer">详情底部</footer>
      </div>
    )
  }
}

export default Com;