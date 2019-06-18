import { createStore } from 'redux';
const reducer = (state = {
  bannerlist: [],
  prolist: []
}, action) => {
  const { type, data } = action // 触发action靠的是type，data为数据
  // if (type === 'changeProlist') {
  //   state.prolist = data;
  //   return state;
  // } else if (type === 'changeBannerlist') {
  //   state.bannerlist = data;
  //   return state;
  // } else {
  //   return state;
  // }
  // 数量多的话用switch较好
  switch (type) {
    case 'changeBannerlist':
      state.bannerlist = data;
      return state;
    case 'changeProlist':
      state.prolist = data;
      return state;
    default:
      return state;
  }
}
const store = createStore(reducer)

export default store;