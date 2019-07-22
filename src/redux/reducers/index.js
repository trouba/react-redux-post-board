import { combineReducers } from 'redux';
import postsReducer from './postReducer';
import themeReducer from './themeReducer'

export default combineReducers({
  postsList: postsReducer,
  theme: themeReducer
});