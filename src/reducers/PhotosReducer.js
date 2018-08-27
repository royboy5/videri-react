// import _ from 'lodash';
import { FETCH_PHOTOS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return { ...state, [action.payload.query]: action.payload.data };
    default:
      return state;
  }
}
