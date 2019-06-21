import { connect } from 'react-redux';
import UI from './UI';
import api from '@/api';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    bannerlist: state.home.bannerlist,
    prolist: state.home.prolist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerListData () {
      api.requestGetData('banner').then(data => {
        dispatch({
          type: 'changeBannerList',
          data
        })
      })
    },
    getProListData () {
      api.requestGetData('douban').then(data => {
        dispatch({
          type: 'changeProList',
          data
        })
      })
    }
  }
}

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Com;