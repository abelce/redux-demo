import { combineReducers } from 'redux';
import user from './user';
import articles from './articles';
import images from './images';
import files from './files';

export default combineReducers({
  user,
  articles,
  images,
  files,
});
