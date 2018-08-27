import { FETCH_VIDEOS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, [action.payload.query]: action.payload.data };
    default:
      return state;
  }
}
