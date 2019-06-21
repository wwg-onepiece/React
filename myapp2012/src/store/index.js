import { createStore, combineReducers, applyMiddleware } from 'redux';
import home from '@/views/home/store';
import thunk from 'redux-thunk';

const reducer = combineReducers ({
  home
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;