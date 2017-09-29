import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import subscribeChannels from './subscribeChannels';

const reducers = combineReducers({
  subscribeChannels,
  routing: routerReducer
})
export default reducers;
