import React from 'react';
// import { Tabs } from 'antd-mobile';
import Tab from '@/components/common/Tab';
class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tabs: [
        { title: '11111'},
        { title: '22222'},
        { title: '333333'}
      ],
      activeIndex: 2
    }
  }
  // renderContent (tab) {
  //   return (
  //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
  //       <p>Content of {tab.title}</p>
  //     </div>
  //   )
  // }
  // clicktab (tabs, index) {
  //   console.log(index)
  //   this.setState({
  //     activeIndex: index
  //   })
  // }
  render () {
    return (
      <div className = "box">
        <header className = "header">分类头部</header>
        <div className = "content">
          {/* <Tabs tabs={ this.state.tabs } onChange = { this.clicktab.bind(this)} onTabClick = { this.clicktab.bind(this)} renderTabBar={function (props) { 
              return <Tabs.DefaultTabBar {...props} page={3} />
          }}>
            {this.renderContent}
          </Tabs> */}
          <Tab tabs = { this.state.tabs }/>
        </div>
      </div>
    )
  }
}

export default Com;