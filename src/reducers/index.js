import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PhotosReducer from './PhotosReducer';
import VideosReducer from './VideosReducer';

const rootReducer = combineReducers({
  form: formReducer,
  photos: PhotosReducer,
  videos: VideosReducer,
});

export default rootReducer;
