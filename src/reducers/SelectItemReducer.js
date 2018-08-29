import { SELECT_ITEM } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case SELECT_ITEM:
      return action.payload;
    default:
      return state;
  }
}
