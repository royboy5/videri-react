import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PhotosReducer from './PhotosReducer';
import VideosReducer from './VideosReducer';
import AuthReducer from './AuthReducer';
import SelectItemReducer from './SelectItemReducer';

const rootReducer = combineReducers({
  form: formReducer,
  isAuth: AuthReducer,
  photos: PhotosReducer,
  videos: VideosReducer,
  item: SelectItemReducer,
});

export default rootReducer;
