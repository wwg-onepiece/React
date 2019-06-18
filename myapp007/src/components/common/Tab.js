import React from 'react';
import { Tabs } from 'antd-mobile';
class Com extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     tabs: [
  //       { title: 'First Tab' },
  //       { title: 'Second Tab' },
  //       { title: 'Third Tab' },
  //     ],
  //     activeIndex: 0
  //   }
  // }
  renderContent (tab) {
    return (
      <div style = {{ display:'flex', alignItems:'center', justifyContent:'center', height:'150px', backgroundColor:'#f80'}}>
        <p>Content of { tab.title }</p>
      </div>
    )
  }
  clicktab (tabs, index) {
    console.log(index)
    this.setState({
      activeIndex: index
    })
  }
  render () {
    return (
      <Tabs tabs={ this.props.tabs } onChange = { this.clicktab.bind(this)} onTabClick = { this.clicktab.bind(this)} renderTabBar={props =>  <Tabs.DefaultTabBar {...props} page={3} />}>
        {this.renderContent}
      </Tabs>
    )
  }
}
// const Com = () => (
//   <div>
//     <WhiteSpace />
//     <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//         Content of first tab
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//         Content of second tab
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//         Content of third tab
//       </div>
//     </Tabs>
//     <WhiteSpace />
//   </div>
// );

export default Com;