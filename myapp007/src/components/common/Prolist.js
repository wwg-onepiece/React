// 编程式跳转
import React from 'react';
class Com extends React.Component {
  goDetail (id) {
    console.log(this.props)
    this.props.history.push('/detail/' + id)
  }
  render () {
    return (
      <div className = "prolist">
        {
          this.props.prolist.map(item => (
            <li key = { item.id } onClick = { this.goDetail.bind(this, item.id) }>
              { item.title }
            </li>
          ))
        }
      </div>
    )
  }
}

export default Com;