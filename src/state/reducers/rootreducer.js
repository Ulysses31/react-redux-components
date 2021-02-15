import { combineReducers } from 'redux';
import postReducer from './postreducer';

export default combineReducers({
  postState: postReducer
});
