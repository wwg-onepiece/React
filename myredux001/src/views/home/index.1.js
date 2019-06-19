import { connect } from './node_modules/react-redux';
import UI from './UI';
import api from './node_modules/@/api';

const mapStateToProps = (state) => {
  return {
    bannerlist: state.bannerlist,
    prolist: state.prolist
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