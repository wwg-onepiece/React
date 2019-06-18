import { createStore } from 'redux';
const reducer = (state = {
  bannerlist: [1, 3, 4],
  prolist: []
}, action) => {
  const { type, data } = action // 触发action靠的是type，data为数据
  switch (type) {
    case 'changeBannerList':
      state = {
        bannerlist: data,
        prolist: state.prolist
      }
      return state;
    case 'changeProList':
      state = {
        bannerlist: state.bannerlist,
        prolist:data
      }
      return state;
    default:
      return state
  }
}

const store = createStore(reducer)

export default store;